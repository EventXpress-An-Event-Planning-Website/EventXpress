import nodemailer from 'nodemailer'

// Function to send the verification email
const sendVerificationEmail = async (
  recipientEmail,
  verificationToken,
  role
) => {
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

// Function to send the ticket details email
const sendTicketDetailsEmail = async (recipientEmail, ticketDetails) => {
  try {
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'team.eventxpress@gmail.com',
        pass: 'srvjxidtzlbfwqsv',
      },
    });

    // Define the email options
    const mailOptions = {
      from: 'team.eventxpress@gmail.com',
      to: recipientEmail,
      subject: 'Your Ticket Details',
      html: `
        <p>Thank you for your ticket purchase! Here are your ticket details:</p>
        <ul>
          <li>Event: ${ticketDetails.eventTitle}</li>
          <li>Date: ${ticketDetails.eventDate}</li>
          <li>Time: ${ticketDetails.eventTime}</li>
          <li>Venue: ${ticketDetails.eventVenue}</li>
          <li>Ticket Type: ${ticketDetails.ticketType}</li>
          <li>Price: ${ticketDetails.ticketPrice}</li>
          <li>Quantity: ${ticketDetails.ticketQuantity}</li>
          <li>Total Payable: ${ticketDetails.totalPayable}</li>
        </ul>
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log('Ticket details email sent:', info.messageId);
  } catch (error) {
    console.error('Error sending ticket details email:', error.message);
    throw new Error('Failed to send ticket details email');
  }
};

export { sendVerificationEmail, sendTicketDetailsEmail }
