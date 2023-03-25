// CREATE SERVER
const express = require("express")
const app = express()
const _PORT = process.env.PORT;
const cors = require("cors")
app.use(cors())
app.use(express.json())


// CONNECT TO DB
const   username = process.env.USERNAME,
        password = process.env.PASSWORD,
        database = process.env.DB;

const mongoose = require("mongoose")
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.1qkmtpq.mongodb.net/${database}?retryWrites=true&w=majority`)


// USER MODEL
const UserModel = require('./models/Users')


// get request
app.get("/users", async (req, res)=>{
    const users = await UserModel.find();
    res.json(users)
})


// create user
app.post("/createUser", async (req, res) => {
    const newUser = new UserModel(req.body);
    await newUser.save();
    res.json(req.body)
})


app.listen(_PORT, ()=>{
    console.log("Server Works")
})