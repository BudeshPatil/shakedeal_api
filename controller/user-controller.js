const express = require("express");
const app = express();
const userModule = require("../model/user");

exports.adduser = async (req, res) => {
  postdata = req.body;
  let user = new userModule({
    username: postdata.username,
    email: postdata.email,
  });
  try {
    let result = user.save();
    let output = {
      code: 200,
      result: result,
      status: "record saved",
    };
    res.json(output);
  } catch (error) {
    console.log(error);
  }
};
