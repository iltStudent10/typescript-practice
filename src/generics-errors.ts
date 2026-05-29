// Intentional Generics + Functions Errors Practice
// Run: npm run check:generics-errors
// Goal: read compiler diagnostics and fix each issue.

// 1) Typed function parameter mismatch
function add(a: number, b: number): number {
  return a + b;
}

add(2, 3);

// 2) Generic function return type mismatch
function wrapValue<T>(value: T): T[] {
  return [value];
}

// 3) Generic array element mismatch
const wrappedNumbers: number[] = wrapValue<number>(5);

// 4) Generic interface misuse
interface Box<T> {
  value: T;
}

const numberBox: Box<number> = {
  value: 100,
};

// 5) Constraint violation with extends
interface HasId {
  id: number;
}

function printId<T extends HasId>(item: T): string {
  return `ID: ${item.id}`;
}

printId({ id: 99 });

// 6) keyof constraint violation
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const profile = { id: 1, name: "Taylor" };
const email = getProp(profile, "name");

console.log(add(2, 3), wrappedNumbers, numberBox, printId({ id: 99 }), email);
