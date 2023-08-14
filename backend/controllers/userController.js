import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import {
  userExists,
  nicExists,
  contactNoExists,
  regCustomer,
  regServiceProvider,
  loginUser,
  updateEmailVerification,
  updateUser,
} from '../models/userModel.js'
import sendVerificationEmail from '../utils/emailUtils.js'
import generateVerificationToken from '../utils/tokenUtils.js'

// @desc    Auth user/set token
// route    POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  
  const user = await loginUser(email, password)
  console.log(user);


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

// @desc    Verify user email
// route    GET /api/users/verify/:token
// @access  Public
const verifyEmail = asyncHandler(async (req, res) => {
  const email = req.query.email
  const verificationToken = req.query.verificationToken
  const role = req.query.role
  
  const response = await updateEmailVerification(email,verificationToken,role)

  if (response) {
    res.status(200).json({
      message: 'Email verification successful',
    })
  } else {
    res.status(400).json({
      message: 'Invalid verification token or token expired',
    })
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
    businessRegImage,
    contactNo,
    password,
    facebookLink,
    instagramLink,
    twitterLink,
    role,
  } = req.body

  const userExist = await userExists(email)
  if (userExist) {
    res.status(400)
    throw new Error('User already exists')
  }

  const nicExist = await nicExists(nic)
  if (nicExist) {
    res.status(400)
    throw new Error('NIC No. already exists')
  }

  const contactNoExist = await contactNoExists(contactNo)
  if (contactNoExist) {
    res.status(400)
    throw new Error('Contact No. already exists')
  }

  let user = ''

  const verificationToken = generateVerificationToken()
  console.log(verificationToken)

  if (role === 'customer') {
    user = await regCustomer(
      name,
      email,
      nic,
      nicImage,
      profileImage,
      location,
      contactNo,
      password,
      verificationToken,
      role,
    )
  } else if (role === 'serviceProvider') {
    user = await regServiceProvider(
      name,
      email,
      nic,
      nicImage,
      profileImage,
      location,
      businessRegImage,
      contactNo,
      password,
      facebookLink,
      instagramLink,
      twitterLink,
      verificationToken,
      role,
    )
  }

  if (user) {
    // Send the verification email
    sendVerificationEmail(email, verificationToken, role)
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

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  verifyEmail,
}
