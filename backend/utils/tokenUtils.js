import crypto from 'crypto'

// Function to generate a unique verification token
const generateVerificationToken = () => {
  // Generate a random 32-character token using crypto.randomBytes
  const token = crypto.randomBytes(32).toString('hex')
  return token
}

export default generateVerificationToken
