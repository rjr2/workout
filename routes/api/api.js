const router = require("express").Router();
const Workout = require("../../model/workouts.js");

router.post("/workouts", async ({ body }, res) => {
  Workout.create(body)
    .then(dbworkouts => {
      res.json(dbworkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// router.get("/api/workouts/" + id, ({ body }, res) => {
//   Workout.find({id})
//     .then(dbworkouts => {
//       res.json(dbworkouts);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.get("/api/workouts", (req, res) => {
//   Workout.find({})
//     .sort({ date: -1 })
//     .then(dbworkouts => {
//       res.json(dbworkouts);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

module.exports = router;

