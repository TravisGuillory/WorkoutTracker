const router = require("express").Router();
const Workout = require("../models.workout.js");

// Routes

// GET route to get all saved workouts
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

// GET range of workouts
router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then((dbWorkouts) => {
      console.log(dbWorkouts);
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Create a new empty workout routine. POST route
router.post("/api/workouts", (req, res) => {
  console.log("WOrkout created");
  Workout.create({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// add exeercise to workout
router.put("/api/workouts/workouts/:id", ({ params, body }, res) => {
  db.Workout.findOneAndUpdate(
    { _id: params.id },
    { $push: { excercises: body } },
    { upsert: true, useFindandModify: false },
    (updatedWorkout) => {
      res.json(updatedWorkout);
    }
  );
});

// DELETE a workout
router.delete("/api/workouts/", (req, res) => {
  db.Workout.remove({
    id: req.params.workout_id,
  })
    .then((dbWorkout) => {
      res.json(dbWorkout);
      console.log("Workout Deleted");
    })
    .catch((err) => {
      res.json(err);
    });
});
