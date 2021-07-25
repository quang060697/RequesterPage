const mongoose = require("mongoose")
const DataSchema = new mongoose.Schema(
    {
        taskName: String,
        taskTitle: String,
        taskReward: String,
        taskDescription: String,
        masterWorkers: String,
        taskExpiryDate: String,
        taskNumber: String,
    }
)

module.exports  =  mongoose.model("DataSchema", DataSchema)
