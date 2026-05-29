// TypeScript Practice File
// Topics: type annotations, interfaces, type aliases, union types

// 1) Type Annotations
let learnerName: string = "Alex";
let practiceHours: number = 2;
let isActive: boolean = true;

function addHours(current: number, additional: number): number {
  return current + additional;
}

practiceHours = addHours(practiceHours, 1);

// 2) Interfaces
interface Course {
  id: number;
  title: string;
  completed: boolean;
}

const tsCourse: Course = {
  id: 101,
  title: "TypeScript Basics",
  completed: false,
};

function markComplete(course: Course): Course {
  return { ...course, completed: true };
}

const completedCourse = markComplete(tsCourse);

// 3) Type Aliases
type Difficulty = "beginner" | "intermediate" | "advanced";

type Lesson = {
  topic: string;
  difficulty: Difficulty;
};

const todayLesson: Lesson = {
  topic: "Union Types",
  difficulty: "beginner",
};

// 4) Union Types
type Score = number | "N/A";

function formatScore(score: Score): string {
  if (score === "N/A") {
    return "Score not available";
  }
  return `Score: ${score.toFixed(1)}`;
}

const quizScore: Score = 92.5;
const missingScore: Score = "N/A";

// Output
console.log("Learner:", learnerName);
console.log("Hours Practiced:", practiceHours);
console.log("Active:", isActive);
console.log("Completed Course:", completedCourse);
console.log("Today's Lesson:", todayLesson);
console.log(formatScore(quizScore));
console.log(formatScore(missingScore));

// Practice Tasks (uncomment and try)
// 1. Change learnerName to a number and observe the compiler error.
// learnerName = 42;

// 2. Add an optional field to Course interface: notes?: string
// Then create a new course object that includes notes.

// 3. Extend Difficulty with "expert" and create a Lesson using it.

// 4. Change Score to: number | "N/A" | null
// Update formatScore to handle null safely.
