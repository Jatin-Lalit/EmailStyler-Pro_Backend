const express = require("express");
const send = express.Router();
const nodemailer = require('nodemailer');

send.post("/send-email", async (req, res) => {
  try {
    const { recipientEmails, sender_email, subject, message, accesstoken } = req.body;

    // Create a transporter with your email service settings
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: sender_email,
        pass: accesstoken,
      },
    });

    const successEmails = [];
    const failedEmails = [];

    // Loop through recipients and send emails
    for (const recipient of recipientEmails) {
      const trimmedRecipient = recipient.trim();

      const mailOptions = {
        from: sender_email,
        to: trimmedRecipient,
        subject: subject,
        html: message,
      };

      try {
        // Send the email
        await sendEmailWithNodemailer(transporter, mailOptions);
        successEmails.push(trimmedRecipient);
      } catch (error) {
        console.error('Error sending email to', trimmedRecipient, ':', error);
        failedEmails.push(trimmedRecipient);
      }
    }

    res.status(200).json({ 
      message: 'Email(s) sent successfully',
      successEmails,
      failedEmails,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

async function sendEmailWithNodemailer(transporter, mailOptions) {
  return new Promise((resolve, reject) => {
    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        reject(error); // Reject the promise in case of an error
      } else {
        console.log('Email sent to', mailOptions.to, ':', info.response);
        resolve(); // Resolve the promise when the email is sent successfully
      }
    });
  });
}



module.exports={
    send
}