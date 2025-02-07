# TypeScript Best Practices

**Overview:**  
This document outlines essential and advanced TypeScript best practices for building robust, maintainable, and type-safe applications. It covers strategies from enabling strict type-checking and explicit typing to leveraging advanced typing features, enforcing immutability with built-in readonly collection types, and using advanced generics techniques—including "in" and "out" concepts where applicable.

## Important Notes

- Never abbreviate words in code.

## 1. Strict Type-Checking

- **Guideline:**  
  Enable strict type-checking by setting `"strict": true` in your `tsconfig.json`. This enforces comprehensive type-checking and helps catch potential errors at compile time.

**Example:**

```json
{
  "compilerOptions": {
    "strict": true,
    // other options...
  }
}
```

---

## 2. Avoiding the `any` Type

- **Guideline:**  
  Avoid using the `any` type; instead, use precise types or generics to maintain type safety and benefit from compile-time checks.

---

## 3. Explicit Typing

- **Guideline:**  
  Always specify return types for functions and types for parameters to enhance clarity and maintainability.

**Example:**

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

---

## 4. Interface Naming Conventions

- **Guideline:**  
  - Prefix interfaces with an uppercase 'I' (e.g., `IUser`).
  - Suffix interface files with `.interface.ts` (e.g., `user.interface.ts`).

**Example:**

```typescript
// user.interface.ts
export interface IUser {
  id: number;
  name: string;
  email: string;
}
```

---

## 5. Leveraging ES6+ Features

- **Guideline:**  
  Utilize modern JavaScript features (arrow functions, modules, destructuring, template literals, etc.) to write cleaner and more concise code.

**Example:**

```typescript
const greet = (name: string): string => `Hello, ${name}!`;
const { id, name } = { id: 1, name: "Alice" };
```

---

## 6. Consistent Naming Conventions

- **Guideline:**  
  Maintain uniform naming conventions for variables, functions, and classes. Use a pattern like `feature.type.ts` (e.g., `user.service.ts`, `order.component.ts`) to ensure consistency and readability.

---

## 7. Import Management

- **Guideline:**  
  Regularly organize and remove unused imports to keep your codebase tidy. Most modern editors (like VS Code) provide tools to automatically sort and manage imports.

---

## 8. Encapsulation with Private Fields

- **Guideline:**  
  Use JavaScript’s hard private fields (prefixed with `#`) to enforce runtime encapsulation, ensuring that private properties are inaccessible outside the class.

**Example:**

```typescript
class User {
  #password: string;

  constructor(password: string) {
    this.#password = password;
  }

  validatePassword(input: string): boolean {
    return this.#password === input;
  }
}
```

---

## 9. Immutability and Readonly Collection Types

- **Default Immutability:**  
  Treat objects, function arguments, and data structures as immutable by default to prevent unintended mutations.

- **Readonly Collection Types:**  
  Use built-in collection types such as `ReadonlyArray`, `ReadonlySet`, and `ReadonlyMap` to enforce immutability.

**Examples:**

```typescript
// Using ReadonlyArray for immutable lists:
function processNumbers(numbers: ReadonlyArray<number>): ReadonlyArray<number> {
  return numbers.map(n => n * 2);
}

const immutableNumbers: ReadonlyArray<number> = [1, 2, 3];

// Using ReadonlySet for immutable sets:
const roles: ReadonlySet<string> = new Set(['admin', 'user']);

// Using ReadonlyMap for immutable maps:
const config: ReadonlyMap<string, string> = new Map([
  ['apiEndpoint', 'https://api.example.com'],
  ['theme', 'dark']
]);
```

- **Readonly Parameters and Return Types:**  
  Use the `readonly` modifier on function parameters and return types where applicable. Apply `readonly` recursively for deep immutability.

---

## 10. Advanced Typing Techniques

- **Utility Types and Mapped Types:**  
  Leverage built-in utility types (e.g., `Partial<T>`, `Readonly<T>`, `Pick<T, K>`, `Record<K, T>`) to enhance type safety and reduce redundancy.
  
- **Conditional Types with `infer`:**  
  Use conditional types with the `infer` keyword to extract types from complex types.
  
  **Example:**
  ```typescript
  type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
  
  function exampleFunction(a: number): string {
    return a.toString();
  }
  
  type ExampleReturn = ReturnType<typeof exampleFunction>; // string
  ```
  
- **Template Literal Types:**  
  Use template literal types to create more expressive type definitions.

  **Example:**
  ```typescript
  type EventName = `on${string}`;
  
  function handleEvent(event: EventName) {
    // ...
  }
  
  handleEvent('onClick'); // Valid
  ```
  
- **Variadic Tuple Types:**  
  Support flexible function signatures by using variadic tuple types.

- **Discriminated Unions:**  
  Use discriminated unions to ensure exhaustive type checks, which is especially useful in switch statements.

- **In and Out in Generics (Mapped Types):**  
  Use the `in` keyword in mapped types to iterate over keys, providing a means to enforce transformations over properties.

  **Example:**
  ```typescript
  type Mutable<T> = { -readonly [P in keyof T]: T[P] };
  type Immutable<T> = { readonly [P in keyof T]: T[P] };
  
  interface User {
    name: string;
    age: number;
  }
  
  type ImmutableUser = Immutable<User>;
  ```
  
  Although TypeScript doesn't have explicit `in`/`out` variance keywords like some other languages, function parameter types are contravariant (in) and return types are covariant (out). Design your generics with this in mind for improved type safety.

---

## 11. Reactive Programming in TypeScript

- **Prefer Signals:**  
  Favor using signals over observables for managing reactive state. Signals simplify state updates and automatically track dependencies.
  
- **Convert Observables:**  
  Never subscribe to an Observable directly in the template. Convert observables to signals using `toSignal()` from the interop package.

**Example:**

```typescript
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, of } from 'rxjs';

const data$: Observable<number> = of(42);
const dataSignal = toSignal(data$);
// In template: {{ dataSignal() }}
```

---

## 12. Documentation and Self-Explanatory Code

- **Guideline:**  
  Write clear and self-explanatory code. Use descriptive names and document functions and classes with JSDoc comments where necessary. Do not over-document; let the code speak for itself.

  Do not comment obvious things.

**Example:**

```typescript
/**
 * Concatenates two strings.
 *
 * @param a - The first string.
 * @param b - The second string.
 * @returns The concatenated result.
 */
function concat(a: string, b: string): string {
  return a + b;
}
```

---

## 13. Generics for Reusability and Type Safety

- **Guideline:**  
  Utilize generics to write reusable and type-safe functions, classes, and interfaces.  
  When possible, design generic functions with proper variance—function parameters are contravariant (in) and return types are covariant (out). Use generics to capture and reuse type information.

**Example:**

```typescript
function identity<T>(value: T): T {
  return value;
}

const numberIdentity = identity<number>(123);
const stringIdentity = identity<string>('hello');
```

- **Advanced Generic Features:**  
  Use conditional types, template literal types, and variadic tuple types for advanced scenarios. For instance, you can create generic helper types that transform or enforce readonly behavior.

---

## 14. Reflective Questions

1. **Strictness and Immutability:**  
   How has enabling strict type-checking and using readonly collection types like `ReadonlyArray`, `ReadonlySet`, and `ReadonlyMap` improved your code’s predictability? Can you share an example where this prevented a bug?

2. **Advanced Typing Techniques:**  
   How do utility types, conditional types with `infer`, and template literal types help you write more robust type definitions? Can you provide a scenario where these features reduced redundancy?

3. **Generics and Variance:**  
   How do you design your generic functions considering variance (parameters as "in" and return types as "out")? What challenges have you faced when using generics?

4. **Reactive Patterns:**  
   In what scenarios have you converted Observables to signals using `toSignal()`? How does this practice simplify your template bindings and improve performance?

5. **Documentation and Clarity:**  
   What strategies do you use to ensure your code is self-explanatory and well-documented? How does this benefit your team during maintenance and onboarding?
