import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import { getUserFromToken } from '../models/userModel.js'

const protect = asyncHandler(async (req, res, next) => {
  let token

  token = req.cookies.jwt

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      const userId = decoded.userId
      req.user = await getUserFromToken(userId)
      next()
    } catch (error) {
      console.error(error)
      res.status(401)
      throw new Error('Not authorized, invalid failed')
    }
  } else {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

export { protect }
