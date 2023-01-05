const express = require("express");
const app = express();
var teamModel = require("../model/team");
var taskModel = require("../model/task");

exports.getallteams = async (req, res) => {
  let postData = req.body;
  try {
    let result = await teamModel.find();
    let output = {
      code: 200,
      result: result,
      message: "get teams sucessfully",
    };
    res.send(output);
  } catch (error) {
    console.log(error);
  }
};

exports.saveteam = async (req, res) => {
  let postData = req.body;
  let team = new teamModel({
    name: postData.name,
    user_1: postData.user_1,
    user_2: postData.user_2
  });
  try {
    let result = await team.save();
    let output = {
      code: 200,
      result: result,
      message: "save team sucessfully",
    };
    res.send(output);
  } catch (error) {
    console.log(error);
  }
};


exports.savetask = async (req, res) => {
  let postData = req.body;
  let task = new taskModel({
    team: postData.team
  });
  try {
    let result = await task.save();
    let output = {
      code: 200,
      result: result,
      message: "save task sucessfully",
    };
    res.send(output);
  } catch (error) {
    console.log(error);
  }
};

exports.getalltasks = async (req, res) => {
  let postData = req.body;
  try {
    let result = await taskModel.find();
    let output = {
      code: 200,
      result: result,
      message: "get all task sucessfully",
    };
    res.send(output);
  } catch (error) {
    console.log(error);
  }
};