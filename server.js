const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("./User");
const Task = require("./Task");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/taskdb")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

  // Serve index.html when the user visits '/'
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
  });

  const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token missing" });
  try {
    const decoded = jwt.verify(token, "secretkey");
    req.userId = decoded.id;
    next();
  } 
  catch 
  {
    res.status(401).json({ message: "Invalid token" });
  }
};

// Register
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashed });
    await user.save();
    res.json({ message: "User registered" });
  } 
  catch (err) {
    res.status(400).json({ message: "Error: " + err.message });
  }
});

// Login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Wrong password" });

    const token = jwt.sign({ id: user._id }, "secretkey", { expiresIn: "1d" });
    res.json({ token });
  } catch (err) {
    res.status(400).json({ message: "Error: " + err.message });
  }
});

// Create Task
app.post("/tasks", authMiddleware, async (req, res) => {
    const { title, description, dueDate, priority } = req.body;
    const task = new Task({
      title,
      description,
      dueDate,
      priority,
      assignedTo: req.userId
    });
    await task.save();
    res.json({ message: "Task created", task });
  });
  

// Get All Tasks
app.get("/tasks", authMiddleware, async (req, res) => {
    const priorityOrder = { high: 1, medium: 2, low: 3 };
    const statusOrder = { pending: 1, "in-progress": 2, completed: 3 };
  
    const tasks = await Task.find({ assignedTo: req.userId });
    for (let task of tasks) {
      if (task.status === "in-progress" && task.dueDate && new Date(task.dueDate) < Date.now()) {
        task.status = "pending";
        await task.save();
      }
    }
    const sorted = tasks.sort((a, b) => {
      const p1 = priorityOrder[a.priority] || 4;
      const p2 = priorityOrder[b.priority] || 4;
      if (p1 !== p2) return p1 - p2;
  
      const s1 = statusOrder[a.status] || 4;
      const s2 = statusOrder[b.status] || 4;
      if (p1 !== p2) return p1 - p2;
      return s1 - s2;
    });
  
    res.json(sorted);
  });
  

// Get Single Task
app.get("/tasks/:id", authMiddleware, async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id, assignedTo: req.userId });
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
});

// Update Task
app.put("/tasks/:id", authMiddleware, async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id, assignedTo: req.userId });
  if (!task) return res.status(404).json({ message: "Task not found" });

  const { title, description, dueDate, status } = req.body;
  if (title) task.title = title;
  if (description) task.description = description;
  if (dueDate) task.dueDate = dueDate;
  if (status) task.status = status;

  await task.save();
  res.json({ message: "Task updated", task });
});

// Delete Task
app.delete("/tasks/:id", authMiddleware, async (req, res) => {
  const task = await Task.findOneAndDelete({ _id: req.params.id, assignedTo: req.userId });
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json({ message: "Task deleted" });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
