// [{category:"1",children:[{}]},{category:"2",children:[]},{}]
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://localhost/mydb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a Mongoose schema for a "Task" document
const taskSchema = new mongoose.Schema({
  id: Number,
  name: String,
  image: String,
  price: Number,
  description: String,
});

// Create a Mongoose model from the schema
const Task = mongoose.model("Task", taskSchema);

app.post("/products/new", async (req, res) => {
  const task = new Task({
    id: req.body.id,
    name: req.body.name,
    image: req.body.image,
    price: req.body.price,
    description: req.body.description,
  });

  try {
    const savedTask = await task.save();
    res.send(savedTask);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Route to retrieve all tasks
app.get("/products", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Start the Express server
const port = 3001;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
