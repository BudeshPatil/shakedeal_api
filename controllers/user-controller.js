const express = require("express");
const app = express();
var userModel = require("../model/user");

exports.getallusers = async (req, res) => {
  let postData = req.body;
  try {
    let result = await userModel.find();
    let output = {
      code: 200,
      result: result,
      message: "get users sucessfully",
    };
    res.send(output);
  } catch (error) {
    console.log(error);
  }
};

exports.saveUser = async (req, res) => {
  let postData = req.body;
  let user = new userModel({
    username: postData.name,
    email: postData.email,
  });
  try {
    let result = await user.save();
    let output = {
      code: 200,
      result: result,
      message: "save user sucessfully",
    };
    res.send(output);
  } catch (error) {
    console.log(error);
  }
};
