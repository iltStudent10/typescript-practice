// Functions and Generics Practice
// Topics: typed functions, generic functions, generic interfaces, constraints

// 1) Typed Functions
function greet(name: string): string {
  return `Hello, ${name}!`;
}

function calculateTotal(price: number, quantity: number, taxRate: number = 0.1): number {
  const subtotal = price * quantity;
  return subtotal + subtotal * taxRate;
}

const greetingMessage: string = greet("Alex");
const totalCost: number = calculateTotal(25, 3);

// 2) Generic Functions
function identity<T>(value: T): T {
  return value;
}

function firstItem<T>(items: T[]): T | undefined {
  return items[0];
}

const idNumber = identity<number>(101);
const idText = identity<string>("TS");
const firstCourse = firstItem<string>(["Types", "Interfaces", "Generics"]);

// 3) Generic Interfaces
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

type Student = {
  id: number;
  name: string;
};

const studentResponse: ApiResponse<Student> = {
  success: true,
  data: { id: 1, name: "Jordan" },
};

const lessonsResponse: ApiResponse<string[]> = {
  success: true,
  data: ["Typed Functions", "Generic Functions", "Constraints"],
  message: "Loaded lessons",
};

// 4) Generic Constraints
interface HasLength {
  length: number;
}

function describeLength<T extends HasLength>(input: T): string {
  return `Length is ${input.length}`;
}

const lengthOfText = describeLength("TypeScript");
const lengthOfArray = describeLength([10, 20, 30, 40]);

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const studentName = getProperty(studentResponse.data, "name");

console.log("Greeting:", greetingMessage);
console.log("Total Cost:", totalCost.toFixed(2));
console.log("Identity Number:", idNumber);
console.log("Identity Text:", idText);
console.log("First Course:", firstCourse);
console.log("Student Response:", studentResponse);
console.log("Lessons Response:", lessonsResponse);
console.log("Length (text):", lengthOfText);
console.log("Length (array):", lengthOfArray);
console.log("Student Name from getProperty:", studentName);

// Practice Tasks (uncomment and try)
// 1. Change greet parameter type to number and fix resulting usage errors.
// 2. Create a generic function wrapInArray<T>(value: T): T[] and test it.
// 3. Create ApiResponse<number[]> and log the average.
// 4. Try describeLength(123) and observe why it fails with constraints.
// 5. Use getProperty with an invalid key and observe the compiler error.
