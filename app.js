const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(cookieParser());

// Route imports
const user = require("./routes/userRoute");
const article = require("./routes/articleRoute");

app.use("/api/v1", user);
app.use("/api/v1", article);

app.use(errorMiddleware);

module.exports = app;
