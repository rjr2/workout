const router = require("express").Router();
const express = require('express');
const db = require('../../model')

router.post("/", ({body}, res) => {
  db.Workout.create(body)
  .then(dbWorkout => {
    res.json(dbWorkout);
  }).catch(err => {
    res.json(err);
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

