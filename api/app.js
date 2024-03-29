require("dotenv").config();
var createError = require('http-errors');
const express = require('express');     // "express": "^4.18.2"
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const mongoose = require("mongoose");

var indexRouter = require("./routes/index");
var examsRouter = require("./routes/exams");
var usersRouter = require("./routes/users");

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter); // main home page
app.use("/api/exams", examsRouter); //get all items in a list
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});




//CONNECTION TO DB WITH MONGOOSE
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen requests
    //listening to the server, if auth is bad in mongodb atlas,  no connection is stablished
    app.use(function (err, req, res, next) {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get("env") === "development" ? err : {};
    
      // render the error page
      res.status(err.status || 500);
      res.render("error");
    });
  })
  .catch((error) => {
    console.log(error);
  });



module.exports = app;
