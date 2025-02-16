require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const pollRoutes = require("./routes/pollRoutes");

const app = express();
app.use(express.json());
// ✅ Use CORS Middleware
app.use(cors({
  origin: "http://localhost:5173", // Allow frontend origin
  credentials: true, // Allow cookies & headers like Authorization
}));

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use("/api/auth", authRoutes);
app.use("/api/polls", pollRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
