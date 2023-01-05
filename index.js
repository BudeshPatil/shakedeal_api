const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors     = require("cors");
dotenv.config();
const userRoutes    = require("./routes/user");
const teamRoutes    = require("./routes/team");

mongoose.connect('mongodb://localhost:27017/shakedeal_db', {
  },(err) => {
    if(err) {
      console.log('connection err', err);
    } else {
      console.log('Database connected');
    }
});

app.use(express.json());
app.use(cors());
app.use("/api/users",userRoutes);
app.use("/api/team",teamRoutes);

app.get("/", (req, res) => {
  res.send(
    `<h1>
          Wellcome to Myadmin Backend 
      </h1>`
  );
});


app.listen(3000,() => console.log("App running in port 3000 !"));
