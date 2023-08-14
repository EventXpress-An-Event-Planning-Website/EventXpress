import express from 'express'
const router = express.Router()
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  verifyEmail,
} from '../controllers/userController.js'
import {protect}  from '../middleware/authMiddleware.js'

router.post('/register', registerUser)
router.post('/login', authUser)
router.post('/logout', logoutUser)
router.get('/profile', protect, getUserProfile)
router.put('/profile', protect, updateUserProfile)
router.get('/verify', verifyEmail);

export default router
