require('dotenv').config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// Middleware setup
app.use(cors({
  origin: 'http://localhost:3000', // Your React app's URL
  methods: ['POST', 'OPTIONS'],    // Allowed methods
  credentials: true
}));
app.use(express.json());

// Email transporter setup
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

// Verify email configuration
contactEmail.verify((error) => {
  if (error) {
    console.log("Email config error:", error);
  } else {
    console.log("Ready to send emails");
  }
});

// Contact endpoint
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  
  // Input validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const mail = {
    from: name,
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Email send error:", error);
      return res.status(500).json({ error: "Failed to send message" });
    }
    res.json({ code: 200, status: "Message Sent" });
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


