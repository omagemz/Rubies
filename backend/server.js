import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import transactionRoutes from "./routes/transactionRoutes.js";

dotenv.config();
const app = express();

// CORS configuration - allow GitHub Pages
app.use(cors({
  origin: ['https://omagemz.github.io', 'http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json());

// Health check endpoint (no auth required)
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Secret key middleware (only for /api routes)
app.use('/api', (req, res, next) => {
  const secret = req.headers.authorization;
  console.log('Received Authorization:', secret);
  console.log('Expected API_SECRET:', process.env.API_SECRET);
  
  if (!secret || secret !== process.env.API_SECRET) {
    console.log('Authorization failed');
    return res.status(403).json({ 
      message: "Unauthorized",
      received: secret ? 'header present' : 'no header',
      expected: process.env.API_SECRET ? 'secret configured' : 'no secret configured'
    });
  }
  console.log('Authorization successful');
  next();
});

// MongoDB connection
if (!process.env.MONGO_URI || process.env.MONGO_URI.includes('your_')) {
  console.error(
    "Missing or placeholder MONGO_URI in .env. Set a valid MongoDB connection string before starting the server."
  );
  process.exit(1);
}

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/transactions", transactionRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
