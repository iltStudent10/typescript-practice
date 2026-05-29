// Intentional TypeScript Errors Practice
// Run: npm run check:errors
// Goal: read compiler diagnostics and fix each issue.

// 1) Type annotation mismatch
// let username: string = 123;
let username: string = "123";

// 2) Interface property type mismatch
interface UserProfile {
  id: number;
  email: string;
  subscribed: boolean;
}

const user: UserProfile = {
  id: 1,
  email: "student@example.com",
  subscribed: true,
};

// 3) Type alias and union misuse
type Status = "active" | "inactive";

function setStatus(status: Status): Status {
  return status;
}

const currentStatus: Status = "inactive";
setStatus("active");

// 4) Function parameter and return type issues
function multiply(a: number, b: number): number {
  return a * b;
}

multiply(2, 4);

// 5) Nullable union not handled
type ApiResult = string | null;

function toUpper(result: ApiResult): string {
  if (result === null) {
        return "";
    }
  return result.toUpperCase();
}

console.log(username, user, currentStatus, multiply(2, 3), toUpper(null));
