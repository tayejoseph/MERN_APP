const express = require("express");
// this help us have access to our env
const dotenv = require("dotenv").config();
const port = process.env.PORT || 500;
const { errorHandler } = require("./middleware/errorMiddleware");
const app = express();

// this is a middleware that allows our api to accept json and urlencoded
app.user(express.json());
app.use(express.urlencoded({ extends: false }));
app.user(errorHandler);

app.use("/api/goals", require("./routes/goalRoutes"));

app.listen(port, () => console.log(`Server is runnung on PORT=${port}`));
