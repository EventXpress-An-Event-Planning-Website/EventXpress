import { query } from '../config/db.js'
import bcrypt from 'bcryptjs'
import asyncHandler from 'express-async-handler'

// check if a user with the given email exists
const userExists = async (email, role) => {
  try {
    const userExistsQuery = `SELECT * FROM ${role} WHERE email = $1`
    const userExists = await query(userExistsQuery, [email])

    return userExists.rowCount > 0 ? true : false
  } catch (error) {
    console.error(`Error checking user existence: ${error.message}`)
    throw new Error(`Internal Error`)
  }
}

// login user with the given email and password
const loginUser = asyncHandler(async (email, password) => {
  const userDetailsQuery = `
    SELECT 'admin' AS role, id, name, email, password FROM admin WHERE email = $1 
    UNION 
    SELECT 'customer' AS role, id, name, email, password FROM customer WHERE email = $1 
    UNION 
    SELECT 'serviceProvider' AS role, id, name, email, password FROM serviceProvider WHERE email = $1`
  const userDetails = await query(userDetailsQuery, [email])
  if (userDetails.rowCount > 0) {
    const user = userDetails.rows[0]
    const matchPassword = await bcrypt.compare(password, user.password)

    return matchPassword ? user : false
  } else {
    throw new Error('Invalid email')
  }
})

// register a new customer
const regCustomer = asyncHandler(
  async (
    name,
    email,
    nic,
    nicImage,
    profileImage,
    location,
    contactNo,
    password
  ) => {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const createUserQuery = `
      INSERT INTO 
        customer(name, email, nic, nicImage, profileImage, location, contactNo, password) 
        VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id, name, email`
    const createUser = await query(createUserQuery, [
      name,
      email,
      nic,
      nicImage,
      profileImage,
      location,
      contactNo,
      hashedPassword,
    ])
    if (createUser.rowCount > 0) {
      return createUser.rows[0]
    } else {
      throw new Error('Internal Error')
    }
  }
)

// register a new service provider
const regServiceProvider = asyncHandler(
  async (
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
  ) => {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const createUserQuery = `
      INSERT INTO 
        serviceProvider(name, email, nic, nicImage, profileImage, location, contactNo, password, facebookLink, instagramLink, twitterLink) 
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9 , $10, $11) RETURNING id, name, email`
    const createUser = await query(createUserQuery, [
      name,
      email,
      nic,
      nicImage,
      profileImage,
      location,
      contactNo,
      hashedPassword,
      facebookLink,
      instagramLink,
      twitterLink
    ])
    if (createUser.rowCount > 0) {
      return createUser.rows[0]
    } else {
      throw new Error('Internal Error')
    }
  }
)

// update user details
const updateUser = asyncHandler(async (userId, name, email, password) => {
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
  const updatedUser = await query(updateUserQuery, updateUserValues)

  if (updatedUser.rowCount > 0) {
    return updatedUser.rows[0]
  } else {
    throw new Error('Internal Error')
  }
})

// get the user with the given user id
const getUserFromToken = asyncHandler(async (userId) => {
  const getUserQuery = 'SELECT * FROM users WHERE id = $1'
  const getUser = await query(getUserQuery, [userId])

  if (getUser.rowCount > 0) {
    return getUser.rows[0]
  } else {
    throw new Error('Invalid token')
  }
})

export { userExists, regCustomer, regServiceProvider,loginUser, updateUser, getUserFromToken }
