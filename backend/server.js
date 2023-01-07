const express = require("express");
// this help us have access to our env
const dotenv = require("dotenv").config();
const colors = require("colors");
const connectDB = require("./config/db");
const port = process.env.PORT || 500;
const { errorHandler } = require("./middleware/errorMiddleware");

connectDB();

const app = express();

// this is a middleware that allows our api to accept json and urlencoded
app.use(express.json());
app.use(express.urlencoded({ extends: false }));

app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server is runnung on PORT=${port}`));
