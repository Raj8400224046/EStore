require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const CategoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const app = express()

mongoose.connect(process.env.MONGOURI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true

    })
mongoose.set('useCreateIndex', true);
mongoose.connection.on('connected', () => {
    console.log("connected to mongo yeahhh")
})
mongoose.connection.on('error', (err) => {
    console.log("err connecting", err)
})

//middleware
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(expressValidator())

//routes middleware
app.use("/api", authRoutes)
app.use("/api", userRoutes)
app.use("/api",CategoryRoutes)
app.use("/api",productRoutes)
//server
const port = process.env.PORT;
app.listen(port, () => {
    console.log('Server started at port 5000.');
})