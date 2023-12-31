import { query } from '../config/db.js'
import bcrypt from 'bcryptjs'
import asyncHandler from 'express-async-handler'

// check if a user with the given email exists
const userExists = async (email) => {
  try {
    const userExistsQuery = `
    SELECT 'customer' AS user_type FROM customer WHERE email = $1
    UNION ALL
    SELECT 'serviceProvider' AS user_type FROM serviceProvider WHERE email = $1`
    const userExists = await query(userExistsQuery, [email])

    return userExists.rowCount > 0 ? true : false
  } catch (error) {
    console.error(`Error checking user existence: ${error.message}`)
    throw new Error(`Internal Error`)
  }
}

// check if a user with the given nic exists
const nicExists = async (nic) => {
  try {
    const nicExistsQuery = `
      SELECT 'customer' AS user_type FROM customer WHERE nic = $1
      UNION ALL
      SELECT 'serviceProvider' AS user_type FROM serviceProvider WHERE nic = $1`
    const nicExistsResult = await query(nicExistsQuery, [nic])

    return nicExistsResult.rowCount > 0 ? true : false
  } catch (error) {
    console.error(`Error checking NIC existence: ${error.message}`)
    throw new Error(`Internal Error`)
  }
}

// check if a user with the given contact no exists
const contactNoExists = async (contactNo) => {
  try {
    const contactNoExistsQuery = `
      SELECT 'customer' AS user_type FROM customer WHERE contactNo = $1
      UNION ALL
      SELECT 'serviceProvider' AS user_type FROM serviceProvider WHERE contactNo = $1`
    const contactNoExistsResult = await query(contactNoExistsQuery, [contactNo])

    return contactNoExistsResult.rowCount > 0 ? true : false
  } catch (error) {
    console.error(`Error checking contact number existence: ${error.message}`)
    throw new Error(`Internal Error`)
  }
}

// login user with the given email and password
const loginUser = asyncHandler(async (email, password) => {
  const userDetailsQuery = `
    SELECT 'admin' AS role, id, name, email, password, 'true' AS isVerified FROM admin WHERE email = $1
    UNION 
    SELECT 'customer' AS role, id, name, email, password, isVerified FROM customer WHERE email = $1 
    UNION 
    SELECT 'serviceProvider' AS role, id, name, email, password, isVerified FROM serviceProvider WHERE email = $1`

  const userDetails = await query(userDetailsQuery, [email])

  if (userDetails.rowCount > 0) {
    const user = userDetails.rows[0]
    const matchPassword = await bcrypt.compare(password, user.password)
    if (matchPassword) {
      if (user.isverified === true) {
        return user
      } else {
        throw new Error('Please verify your email')
      }
    } else {
      return false // Password doesn't match
    }
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
    password,
    verificationToken
  ) => {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const createUserQuery = `
      INSERT INTO 
        customer(name, email, nic, nicImage, profileImage, location, contactNo, password, verificationToken) 
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id, name, email`
    const createUser = await query(createUserQuery, [
      name,
      email,
      nic,
      nicImage,
      profileImage,
      location,
      contactNo,
      hashedPassword,
      verificationToken,
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
    businessRegImage,
    contactNo,
    password,
    facebookLink,
    instagramLink,
    twitterLink,
    verificationToken
  ) => {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const createUserQuery = `
      INSERT INTO 
        serviceProvider(name, email, nic, nicImage, profileImage, location, businessRegImage, contactNo, password, facebookLink, instagramLink, twitterLink, verificationToken) 
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9 , $10, $11, $12, $13) RETURNING id, name, email`
    const createUser = await query(createUserQuery, [
      name,
      email,
      nic,
      nicImage,
      profileImage,
      location,
      businessRegImage,
      contactNo,
      hashedPassword,
      facebookLink,
      instagramLink,
      twitterLink,
      verificationToken,
    ])
    if (createUser.rowCount > 0) {
      return createUser.rows[0]
    } else {
      throw new Error('Internal Error')
    }
  }
)

// Verify email using email and verification token
const updateEmailVerification = asyncHandler(
  async (email, verificationToken, role) => {
    try {
      let tableName

      if (role === 'customer') {
        tableName = 'customer'
      } else if (role === 'serviceProvider') {
        tableName = 'serviceprovider'
      } else {
        throw new Error('Invalid role')
      }

      const verifyQuery = `
      UPDATE ${tableName}
      SET isVerified = true
      WHERE email = $1 AND verificationToken = $2
      RETURNING id, name, email, isVerified`

      const verifyResult = await query(verifyQuery, [email, verificationToken])

      if (verifyResult.rowCount > 0) {
        return verifyResult.rows[0]
      } else {
        throw new Error('Invalid email or verification token')
      }
    } catch (error) {
      console.error(`Error verifying email: ${error.message}`)
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

export {
  userExists,
  nicExists,
  contactNoExists,
  regCustomer,
  regServiceProvider,
  loginUser,
  updateEmailVerification,
  updateUser,
  getUserFromToken,
}
