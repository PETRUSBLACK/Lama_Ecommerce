const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dontenv = require("dotenv");
const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")


dontenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DB connection successful"))
.catch((err) => {
    console.log(err);
});

app.use(express.json());

app.get("/api/test", () => {
    console.log("test is successful")
})

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running")
})
