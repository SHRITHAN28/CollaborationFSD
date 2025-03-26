const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs");
//require("dotenv").config(); 
const dotenv = require("dotenv")
dotenv.config();
//const SECRET_KEY="your_secret_key";

const app = express();
app.use(express.json());
mongoose.connect("mongodb+srv://myAtlasDBUser:KRISH831e@myatlasclusteredu.e7sez.mongodb.net/FSD?retryWrites=true&w=majority")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("MongoDB connection error:", err));

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
},
    { collection: "udbs" }
);
const User = mongoose.model("User", userSchema);
//console.log(await User.find())
const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, enum: ["pending", "in-progress", "completed"], default: "pending" },
    dueDate: { type: Date },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}
    ,
    { collection: "tasks" });
const Task = mongoose.model("Task", taskSchema);


const authenticateToken = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) return res.status(401).send("Access Denied. No token provided.");
    try {
        const decoded = jwt.verify(token.split(" ")[1], JWT_SECRET);
        req.user = decoded; // Attach user info (decoded from JWT) to request object
        next();
    } catch (err) {
        res.status(400).send("Invalid Token.");
    }
};

// Routes

// Register a New User (POST /api/auth/register)
app.post("/api/auth/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();
        res.status(201).send("User Registered Successfully.");
    } catch (err) {
        res.status(400).send("Error registering user: " + err.message);
    }
});

// User Login and Generate JWT Token (POST /api/auth/login)
app.post("/api/auth/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).send("Invalid Email or Password.");

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).send("Invalid Email or Password.");

        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
        res.json({ token });
    } catch (err) {
        res.status(500).send("Server error.");
    }
});

// Create a New Task (POST /api/tasks)
app.post("/api/tasks", authenticateToken, async (req, res) => {
    const { title, description, status, dueDate } = req.body;
    try {
        const task = new Task({
            title,
            description,
            status,
            dueDate,
            assignedTo: req.user.id
        });
        await task.save();
        res.status(201).send("Task created successfully.");
    } catch (err) {
        res.status(400).send("Error creating task: " + err.message);
    }
});

// Retrieve All Tasks for the Logged-In User (GET /api/tasks)
app.get("/api/tasks", authenticateToken, async (req, res) => {
    try {
        const tasks = await Task.find({ assignedTo: req.user.id });
        res.json(tasks);
    } catch (err) {
        res.status(500).send("Error fetching tasks.");
    }
});

// Retrieve a Specific Task by ID (GET /api/tasks/:id)
app.get("/api/tasks/:id", authenticateToken, async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id, assignedTo: req.user.id });
        if (!task) return res.status(404).send("Task not found.");
        res.json(task);
    } catch (err) {
        res.status(500).send("Error fetching task.");
    }
});

// Update Task Details (PUT /api/tasks/:id)
app.put("/api/tasks/:id", authenticateToken, async (req, res) => {
    const { title, description, status, dueDate } = req.body;
    try {
        const task = await Task.findOneAndUpdate(
            { _id: req.params.id, assignedTo: req.user.id },
            { title, description, status, dueDate },
            { new: true }
        );
        if (!task) return res.status(404).send("Task not found.");
        res.json(task);
    } catch (err) {
        res.status(500).send("Error updating task.");
    }
});

// Delete a Task (DELETE /api/tasks/:id)
app.delete("/api/tasks/:id", authenticateToken, async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id, assignedTo: req.user.id });
        if (!task) return res.status(404).send("Task not found.");
        res.send("Task deleted successfully.");
    } catch (err) {
        res.status(500).send("Error deleting task.");
    }
});

// Start the Express Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
