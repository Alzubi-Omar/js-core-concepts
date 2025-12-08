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

// 1. Destructure the first day's workout plan
const [mondayWorkout] = workoutPlan;

// console.log(mondayWorkout);
// console.log(mondayWorkout.day); // Monday
// console.log(tuesdayWorkout.type); // Push Day

// 2. Skipping Items
const [, tuesdayWorkout, wednesdayWorkout] = workoutPlan;

// console.log("tuesdayWorkout:", tuesdayWorkout);
// console.log("wednesdayWorkout:", wednesdayWorkout);

// 3. Object Destructuring — Extract Day and Type (on all days)
// workoutPlan.forEach(({ day, type }) => {
//   console.log(`We are doing ${type}, on a ${day}`);
// });

// 4. Nested Destructuring — Extract First Tuesday Exercise
const {
  exercises: [firstTuesdayExercise],
} = tuesdayWorkout;

// console.log(firstTuesdayExercise); // Deadlift exercise object

// 5. Nested Destructuring — Extract Sets and Reps of First Wednesday Exercise
const {
  exercises: [{ sets: setsCount, reps: repsCount }],
} = wednesdayWorkout;
// console.log(setsCount);
// console.log(repsCount);

// 6. Rest Operator — Get All Remaining Exercises
const {
  exercises: [firstExercise, ...remainingExercses],
} = mondayWorkout;
console.log(firstExercise); // Bench Press exercise object
// console.log(remainingExercses);

// 7. Default Values — In Case Something Is Missing
const { warmup = "5 minutes light cardio", day: workoutDay } = tuesdayWorkout;

console.log(warmup); // 5 minutes light cardio
console.log(workoutDay); // Tuesday

// 9. Destructuring in a Loop — Print All Exercise Names
for (const { exercises } of workoutPlan) {
  for (const { name } of exercises) {
    console.log(name);
  }
}

// 10. Create Your Own Destructuring Pattern

// Wednesday’s second exercise name
const {
  exercises: [, wedSecondExercise],
} = wednesdayWorkout;
console.log(wedSecondExercise.name); // Leg Press

// Monday’s last exercise rest time
const {
  exercises: [, , { rest: monLastExerciseRest }],
} = mondayWorkout;
console.log(monLastExerciseRest); // 60

// All minutes of rest combined
let totalRest = 0;
for (const { exercises } of workoutPlan) {
  for (const { rest } of exercises) {
    totalRest += rest;
  }
}
console.log(totalRest); // Total rest time in minutes
