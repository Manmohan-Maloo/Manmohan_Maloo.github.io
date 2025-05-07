const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const validator = require("validator");
const rateLimit = require("express-rate-limit");
const nodemailer = require("nodemailer");
const path = require("path");
const https = require("https");
const fs = require("fs");

dotenv.config();

const app = express();

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? [
            "https://manmohan-maloo-portfolio.onrender.com",
            process.env.FRONTEND_URL,
          ].filter(Boolean)
        : true,
    credentials: true,
  })
);
app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requests per windowMs
});

app.use("/api/messages", limiter);

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Message = mongoose.model("Message", messageSchema);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "Portfolio Backend is running!" });
});

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
    const newMessage = new Message({
      name,
      email,
      message,
    });
    await newMessage.save();
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

app.use(express.static(path.join(__dirname, "../dist")));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production" && process.env.USE_HTTPS === "true") {
  try {
    const privateKey = fs.readFileSync(
      process.env.SSL_KEY_PATH || "key.pem",
      "utf8"
    );
    const certificate = fs.readFileSync(
      process.env.SSL_CERT_PATH || "cert.pem",
      "utf8"
    );
    const credentials = { key: privateKey, cert: certificate };

    const httpsServer = https.createServer(credentials, app);
    httpsServer.listen(PORT, () => {
      console.log(`HTTPS Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start HTTPS server:", error);
    app.listen(PORT, () => {
      console.log(`HTTP Server running on port ${PORT} (SSL failed)`);
    });
  }
} else {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`HTTP Server running on port ${PORT}`);
  });
}
