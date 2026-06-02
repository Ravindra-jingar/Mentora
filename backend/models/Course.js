const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },

  price: {
    type: String,
    required: true
  },

  description: {
    type: String
  },

  instructor: {
    type: String
  },

  duration: {
    type: String
  },

  level: {
    type: String
  },
 image: {
  type:String
 },
  status:{ 
type:String
  },

  date:{ 
type: String,
    
  }
})

module.exports =
  mongoose.model("Course", courseSchema)

const Course = mongoose.model("Course", courseSchema)

module.exports = Course