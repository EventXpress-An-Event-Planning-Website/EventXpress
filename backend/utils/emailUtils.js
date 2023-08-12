import nodemailer from 'nodemailer'

// Function to send the verification email
const sendVerificationEmail = async (recipientEmail, verificationToken, role) => {
  try {
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: `team.eventxpress@gmail.com`,
        pass: `srvjxidtzlbfwqsv`,
      },
    })

    // Define the email options
    const mailOptions = {
      from: 'team.eventxpress@gmail.com',
      to: recipientEmail,
      subject: 'Email Verification',
      text: `Please click on the following link to verify your email: 
        http://localhost:3000/users/verify?email=${recipientEmail}&verificationToken=${verificationToken}&role=${role}`,
    }

    // Send the email
    const info = await transporter.sendMail(mailOptions)

    console.log('Verification email sent:', info.messageId)
  } catch (error) {
    console.error('Error sending verification email:', error.message)
    throw new Error('Failed to send verification email')
  }
}

export default sendVerificationEmail
