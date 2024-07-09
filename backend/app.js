const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();

// middleware
const corsOptions = {
   // origin: "https://mearn-deploy.onrender.com/" // frontend URI (ReactJS)

    origin: "http://localhost:8080"
}
app.use(express.json());
app.use(cors());

// connect MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => {
    const PORT = process.env.PORT || 8080 || process.env.SERVER_APP_API;
    app.listen(PORT, () => {
        console.log(`App is Listening on PORT ${PORT}`);
    })
}).catch(err => {
    console.log(err);
});

// route
app.get("/", (req, res) => {
    res.status(201).json({message: "Connected to Backend!"});
});