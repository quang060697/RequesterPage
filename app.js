const DataSchema = require("./models/Data");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const cors = require("cors")
const express = require("express")
const { request, response } = require("express");
const app = express()


app.use(cors())
mongoose.connect('mongodb://localhost:27017/iCrowdTaskDB', { useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());


app.get ('/', (req, res)=>{
    res.send('<script>alert("Running success on port 8080")</script>')
})


  app.post('/', (req,res)=>
  {
      const data = new DataSchema({
            taskName: req.body.taskName,
            taskTitle: req.body.taskTitle,
            taskDescription: req.body.taskDescription,
            taskExpiryDate: req.body.taskExpiryDate,
            masterWorkers: req.body.masterWorkers,
            taskReward: req.body.taskReward,
            taskNumber: req.body.taskNumber
      })
      data.save().then((res) => {
          console.log(data)
      })
      .catch((err) => console.log(err));
  })


let port = process.env.PORT;
if (port == null || port == "") {
    port = 8080;
}

app.listen(port, (req, res) => {
    console.log("Server is running")
})