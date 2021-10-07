const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    Cardio: {
      name: String,
      trim: true,
      required: "Enter a name for workout",
    },
    Distance: {
      type: Number,
      required: "Enter a distance",
    },
      Duration: {
      type: Number,
    },
  },
  {
    Resistance: {
      name: String,
      trim: true,
      required: "Enter a name for workout",
    },
    Weight: {
      type: Number,
      trim: true,
    },
    Sets:{
      type: Number,
      trim: true,
    },
    Reps:{
      type: Number,
      trim: true,
    },
    Duration: {
      type: Number,
      trim: true,
    },
  }  
);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;