import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import { query } from '../config/db.js'
import bcrypt from 'bcryptjs'

// @desc    Auth user/set token
// route    POST /api/users/auth
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body  

  const userDetailsQuery = 'SELECT * FROM users WHERE email = $1'
  const userDetails = await query(userDetailsQuery, [email])
  const user = userDetails.rows[0]
  // console.log(user);
  let matchPassword

  if (userDetails.rowCount > 0) {
    matchPassword = await bcrypt.compare(password, user.password)
  }

  if (matchPassword) {
    // console.log(user);
    generateToken(res, user.id)
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Register user
// route    POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const userExistsQuery = 'SELECT * FROM users WHERE email = $1'
  const userExists = await query(userExistsQuery, [email])

  if (userExists.rowCount > 0) {
    res.status(400)
    throw new Error('User already exists')
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const CreateUserQuery =
    'INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING id, name, email'
  const CreateUser = await query(CreateUserQuery, [name, email, hashedPassword])

  if (CreateUser.rowCount > 0) {
    const user = CreateUser.rows[0]
    generateToken(res, user.id)
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Logout user
// route    POST /api/users/logout
// @access  Public
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  })
  res.status(200).json({ message: 'User logged out' })
})

// @desc    Get user profile
// route    POST /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = {
    _id: req.user.rows[0].id,
    name: req.user.rows[0].name,
    email: req.user.rows[0].email,
  }
  res.status(200).json(user)
})

// @desc    Update user profile
// route    PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  const userId = req.user.rows[0].id
  let hashedPassword
  if (password) {
    // Hash the new password
    hashedPassword = await bcrypt.hash(password, 10)
  }
  const updateUserQuery = `
  UPDATE users
  SET name = COALESCE($1, name),
      email = COALESCE($2, email),
      password = COALESCE($3, password)
  WHERE id = $4
  RETURNING id, name, email
`
  const updateUserValues = [name, email, hashedPassword, userId]
  const updateUser = await query(updateUserQuery, updateUserValues)

  if (updateUser.rowCount > 0) {
    const updatedUser = updateUser.rows[0]
    res.status(200).json({
      _id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile }
