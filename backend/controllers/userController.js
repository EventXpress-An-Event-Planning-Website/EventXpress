import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import {
  userExists,
  regCustomer,
  regServiceProvider,
  loginUser,
  updateUser,
} from '../models/userModel.js'

// @desc    Auth user/set token
// route    POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await loginUser(email, password)

  if (user) {
    generateToken(res, user.id)
    res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    })
  } else {
    res.status(401)
    throw new Error('Invalid password')
  }
})

// @desc    Register user
// route    POST /api/users/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    nic,
    nicImage,
    profileImage,
    location,
    contactNo,
    password,
    facebookLink,
    instagramLink,
    twitterLink,
    role,
  } = req.body

  const userExist = await userExists(email, role)

  if (userExist) {
    res.status(400)
    throw new Error('User already exists')
  }

  let user = ''

  if (role === 'customer') {
    console.log();
    user = await regCustomer(
      name,
      email,
      nic,
      nicImage,
      profileImage,
      location,
      contactNo,
      password,
      role
    )
  } else if (role === 'serviceProvider') {
    user = await regServiceProvider(
      name,
      email,
      nic,
      nicImage,
      profileImage,
      location,
      contactNo,
      password,
      facebookLink,
      instagramLink,
      twitterLink,
      role
    )
  }

  if (user) {
    generateToken(res, user.id)
    res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: role,
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
    id: req.user.rows[0].id,
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
  const userId = req.user.id

  const updatedUser = await updateUser(userId, name, email, password)
  if (updateUser) {
    res.status(200).json({
      id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile }
