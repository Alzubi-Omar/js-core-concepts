const workoutPlan = [
  {
    day: "Monday",
    type: "Push Day",
    exercises: [
      { name: "Bench Press", sets: 4, reps: 8, rest: 90 },
      { name: "Shoulder Press", sets: 3, reps: 10, rest: 75 },
      { name: "Tricep Dips", sets: 3, reps: 12, rest: 60 },
    ],
  },
  {
    day: "Tuesday",
    type: "Pull Day",
    exercises: [
      { name: "Deadlift", sets: 5, reps: 5, rest: 120 },
      { name: "Pull-Ups", sets: 4, reps: 8, rest: 90 },
      { name: "Barbell Row", sets: 3, reps: 10, rest: 75 },
    ],
  },
  {
    day: "Wednesday",
    type: "Leg Day",
    exercises: [
      { name: "Squats", sets: 5, reps: 5, rest: 120 },
      { name: "Leg Press", sets: 4, reps: 12, rest: 90 },
      { name: "Calf Raises", sets: 4, reps: 15, rest: 60 },
    ],
  },
];

// destructure the first day's workout plan
const [mondayWorkout] = workoutPlan;
console.log(mondayWorkout);
