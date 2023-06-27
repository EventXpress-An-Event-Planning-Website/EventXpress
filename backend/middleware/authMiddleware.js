import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import { query } from '../config/db.js'

const protect = asyncHandler(async (req, res, next) => {
  let token

  token = req.cookies.jwt

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      const getUserQuery = 'SELECT * FROM users WHERE id = $1'
      const getUser = await query(getUserQuery, [decoded.userId])
      req.user = getUser

    //   if (getUser.rowCount === 0) {
    //     res.status(401)
    //     throw new Error('Not authorized, token failed')
    //   }
      next()
    } catch (error) {
      console.error(error)
      res.status(401)
      throw new Error('Not authorized, token failed')
    }
  } else {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

export { protect }
