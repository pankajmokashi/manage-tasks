const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const userController = require("./controllers/userController");
const taskController = require("./controllers/taskController");

const app = express();

connectDB();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/register", userController.register);
app.post("/login", userController.login);

app.get("/tasks", taskController.getTasks);
app.get("/tasks/:id", taskController.getTaskById);

// Protected routes
app.post("/tasks", userController.verifyToken, taskController.createTask);
app.put("/tasks/:id", userController.verifyToken, taskController.updateTask);
app.delete("/tasks/:id", userController.verifyToken, taskController.deleteTask);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
