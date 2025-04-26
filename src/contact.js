// const nodemailer = require('nodemailer');

// // Main function that Vercel will use
// module.exports = async (req, res) => {
//   if (req.method == 'POST'||req.method == 'GET') {
//     // return res.status(405).json({ error: 'Method not allowed' });
//     return "testing api by oussama !"
//   }

//   if (req.method !== 'POST') {
//     // return res.status(405).json({ error: 'Method not allowed' });
//     return "testing api by oussama !"
//   }

//   const { name, email, message } = req.body;

//   if (!name || !email || !message) {
//     return res.status(400).json({ error: 'All fields are required' });
//   }

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   try {
//     await transporter.sendMail({
//       from: email,
//       to: process.env.EMAIL_USER,
//       subject: `New message from ${name}`,
//       html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
//     });

//     res.status(200).json({ status: 'Message Sent' });
//   } catch (error) {
//     console.error('Failed to send email:', error);
//     res.status(500).json({ error: 'Failed to send message' });
//   }
// };


module.exports = (req, res) => {
  console.log(req,res)
  res.status(200).send("Hello! The contact API is working!");
};
