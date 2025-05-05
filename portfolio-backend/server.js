const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const validator = require("validator");
const rateLimit = require("express-rate-limit");
const nodemailer = require("nodemailer");
const path = require("path");

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // 100 requests per windowMs
});

// Apply rate limiting only to messages endpoint
app.use("/api/messages", limiter);

// Define Message schema directly here to avoid potential import issues
const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Message = mongoose.model('Message', messageSchema);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Email setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// API routes - Simple health check
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "Portfolio Backend is running!" });
});

// Contact form submission endpoint
app.post("/api/messages", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }
    
    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Create and save new message
    const newMessage = new Message({
      name,
      email,
      message,
    });

    await newMessage.save();

    // Send email notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <h2>New Contact Form Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p>Sent on: ${new Date().toLocaleString()}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error processing message:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Serve static files first
app.use(express.static(path.join(__dirname, "../dist")));

// Simple catch-all approach - no regex patterns that might trigger path-to-regexp errors
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});