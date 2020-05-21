const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    excercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Enter excercise type",
        },
        name: {
          type: String,
          trim: true,
          required: "Enter the excercise name",
        },
        duration: {
          type: Nimber,
          required: "Enter duration of exercise in minutes",
        },
        weight: {
          type: Number,
        },
        repetitions: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
  },
  // Virtual properties when calculated data is needed
  {
    toJSON: {
      virtual: true,
    },
  }
);

// add a Schema property that is dynamically created
workoutSchema.virtual("totalDuration").get(function () {
  // Sum the duration of exercices by array.reduce
  return this.exercises.reduce((total, exercise) => {
    return total + exercises.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
