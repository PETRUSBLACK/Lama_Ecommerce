const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dontenv = require("dotenv");
const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")
const productRoute = require("./routes/user")


dontenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DB connection successful"))
.catch((err) => {
    console.log(err);
});

app.use(express.json());


app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/products", productRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running")
})
