require("dotenv").config(); // For managing environment variables
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');

// Initialize Express
const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON payloads
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection using Mongoose
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://myAtlasDBUser:KRISH831e@myatlasclusteredu.e7sez.mongodb.net/FSD?retryWrites=true&w=majority",
      {
        dbName: "FSD",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to MongoDB Atlas");
  } catch (err) {
    console.error("Error connecting to MongoDB Atlas:", err);
  }
};
connectDB(); // Connect to DB

// User Schema and Model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("udbs", userSchema); 
app.post("/api/users/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to register user", details: err.message });
  }
});
app.get("/api/users/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to retrieve user", details: err.message });
  }
});
app.put("/api/users/:id", async (req, res) => {
  const userId = req.params.id;
  const { name, email, password } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name, email, password },
      { new: true, runValidators: true }
    );
    if (!updatedUser) 
        return res.status(404).json({ error: "User not found" });
    res.json({ message: "User updated successfully", user: updatedUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update user", details: err.message });
  }
});



app.delete('/api/users/:id', async (req, res) => {
    try {
        const user = await User.find({name:id});
        if (!user) {
            return res.status(404).send("User not found.");
        }     // Delete by ID
        await user.remove();
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Failed to delete user' });
    }
});



// Set up the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
