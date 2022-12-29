const express = require("express");
const app = express();
const { ObjectId } = require("bson");
const mongoose = require("mongoose");
const cors = require("cors");
const userroutes = require("./route/user");

const userModel = require("./model/user");
const taskModel = require("./model/task");
const teamModel = require("./model/team");

const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());
app.use(cors);

mongoose.connect("mongodb://localhost:27017/sheakdeal", {}, (error) => {
  if (error) {
    console.log("some error to connect db");
  } else {
    console.log("db is connected");
  }
});

app.get("/", (req, res) => {
  res.send("request is woring");
});

app.get("/getusers", async (req, res) => {
  try {
    let result = await userModel.find();
    let output = {
      code: 200,
      resutl: result,
    };
    res.send(output);
  } catch (error) {
    console.log(error);
  }
});

app.get("/getteams", async (req, res) => {
  try {
    let result = await teamModel.find();
    let output = {
      code: 200,
      resutl: result,
    };
    res.send(output);
  } catch (error) {
    console.log(error);
  }
});


app.use("/api/adduser", userroutes);
app.post("/saveuser", async (req, res) => {
  let user = new userModel({
    username: req.body.username,
    email: req.body.email,
  });
  try {
    console.log(req.body);
    let result = await user.save();
    let output = {
      code: 200,
      resutl: result,
    };
    res.send(output);
  } catch (error) {
    console.log(error);
  }
});

app.post("/saveteam", async (req, res) => {
  let team = new teamModel({
    name: req.body.name,
    // member: req.body.member,
    member: ObjectId(req.body.member),
  });
  try {
    console.log(req.body);
    let result = await team.save();
    let output = {
      code: 200,
      resutl: result,
    };
    res.send(output);
  } catch (error) {
    console.log(error);
  }
});

app.post("/assigntask", async (req, res) => {
  let user = new userModel({
    name: req.body.name,
    team: ObjectId(req.body.team),
    user: ObjectId(req.body.team)
  });
  try {
    console.log(req.body);
    let result = await user.save();
    let output = {
      code: 200,
      resutl: result,
    };
    res.send(output);
  } catch (error) {
    console.log(error);
  }
});





app.listen(5000, () => {
  console.log("app is loading");
});
