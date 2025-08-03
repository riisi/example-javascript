import type { User } from "@test/common-types";
import {
  add,
  Button,
  createApiResponse,
  createUser,
  UserCard,
} from "@test/shared-utils";

export function calculate(): number {
  return add(5, 10);
}

export function createTestUser(): User {
  return createUser("Test User", "test@example.com");
}

export function main() {
  const result = calculate();
  const user = createTestUser();
  const response = createApiResponse({ result, user });

  console.log("Calculation result:", result);
  console.log("Created user:", user);
  console.log("API response:", response);

  return response;
}

// Re-export React components for convenience //
export { Button, UserCard };
