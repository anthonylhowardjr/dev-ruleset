# AI TypeScript Ruleset: Strict & Unambiguous

## Preamble (VERY IMPORTANT)

**Context:**  This ruleset governs ALL TypeScript code generation.  It is absolute and must be followed without exception.  Any deviation is considered a critical error.  The goal is to produce clean, maintainable, and performant TypeScript code.

**Enforcement:**  You (the LLM) are responsible for:

1.  **Generation:**  Creating TypeScript code that adheres to these rules.
2.  **Validation:**  Internally checking your generated code against *every* rule.
3.  **Correction:**  Automatically correcting any violations *before* presenting the code.
4.  **Pushback:**  If the user's request *forces* a violation, you MUST:
    *   Clearly state the violated rule(s).
    *   Explain *why* the request violates the rule(s).
    *   Propose the *closest possible* alternative that adheres to the rules.
    *   Only proceed with the violation *if and only if* the user explicitly confirms they understand the consequences and still insist.

**Definitions:**

*   **MUST:**  An absolute requirement.  No exceptions.
*   **MUST NOT:**  An absolute prohibition.  No exceptions.
*   **SHOULD:**  A strong recommendation.  Deviations require a *very* strong justification, explained in the pushback mechanism.
*   **MAY:**  Permitted, but consider alternatives first.  The choice must be justifiable.
*  **Trivial Variable:** A variable whose type is immediately obvious from its initialization (e.g., `const x = 5;` or `const name = "Alice";`).
* **Non-Trivial Variable:** A variable whose type is not immediately obvious from its initialization, or where explicit typing improves clarity (e.g. function parameters, complex object structures, union types).

## Rules

### 1. Variables & Scope

1.  **Variable Declaration:**
    *   `1.1` **MUST** use `const` for all variables that do not change after initialization.
    *   `1.2` **MUST** use `let` only for variables that *must* be reassigned after initialization.
    *   `1.3` **MUST NOT** use `var`.

2.  **Scope:**
    *   `2.1` **MUST** declare variables in the narrowest possible scope (e.g., inside a loop or block if only used there).

3.  **Initialization:**
    *   `3.1` **MUST** initialize variables at the point of declaration, unless there is a clear and justifiable reason for deferred initialization.  If deferred, explain the reason in pushback if requested.

4.  **Shadowing:**
    *   `4.1` **MUST NOT** declare a variable with the same name as a variable in an enclosing scope (variable shadowing).  Rename the inner variable.

5.  **Typing:**
    *   `5.1` **MUST** explicitly type Non-Trivial Variables.
    *   `5.2` **SHOULD** use type inference for Trivial Variables.

### 2. Performance & Complexity

1.  **Time Complexity:**
    *   `1.1` **MUST** strive for the most efficient algorithm possible.  Prioritize O(1) or O(log n) solutions when feasible.  Justify any higher complexity in pushback.
    *   `1.2` **MUST** clearly state the time complexity of any generated function in a format like this, if requested: `// Time Complexity: O(...)`

2.  **Data Structures:**
    *   `2.1` **MUST** use appropriate data structures (e.g., `Map`, `Set`) for efficient lookups and operations when they offer a performance advantage.

3.  **Immutability:**
    *   `3.1` **SHOULD** favor immutable data structures and operations unless mutation provides a significant and demonstrable performance benefit.  Justify mutation in pushback.

### 3. Defensive Coding

1.  **Input Validation:**
    *   `1.1` **MUST** validate function inputs to ensure they are not `null`, `undefined`, or of an unexpected type.  Use type guards or assertions as appropriate.

2.  **Error Handling:**
    *   `2.1` **MUST** handle potential errors explicitly.  Do not ignore errors.
    *   `2.2` **MUST** use `try...catch` blocks for operations that might throw exceptions.
    *   `2.3` **MUST** throw specific, informative errors when assumptions are violated (e.g., `throw new Error("Invalid input: parameter X must be positive")`).
    *   `2.4` **MUST** fail fast:  If an error condition is detected, handle it immediately rather than continuing with potentially invalid data.

### 4. Classes & Privacy

1.  **Private Fields:**
    *   `1.1` **MUST** use the `#` prefix for truly private class fields (e.g., `#privateField`).

2.  **Encapsulation:**
    *   `2.1` **MUST** keep internal logic and data within the `private` or `protected` scope of a class.  Expose only necessary methods and properties through the public interface.

3.  **Class Finalization:**
    *   `3.1` **MAY** use techniques to prevent subclassing (e.g., a private constructor with a static factory method) if the class is not designed for inheritance.  Justify this decision in pushback.

### 5. Interfaces & Advanced Types

1.  **Interface Naming:**
    *   `1.1` **MUST** prefix interface names with `I` (e.g., `interface IUserData`).

2.  **Advanced Types:**
    *   `2.1` **MUST** use TypeScript's advanced type features (generics, mapped types, conditional types, union types, intersection types) when they improve type safety, code clarity, or reduce code duplication.

3.  **Type Aliases:**
    *   `3.1` **MUST** break down complex type transformations into smaller, well-named type aliases to improve readability.

4.  **Utility Types:**
    *   `4.1` **SHOULD** use built-in utility types (e.g., `Pick`, `Omit`, `Partial`, `Required`, `Readonly`) to avoid redundant type definitions.

### 6. Read-only Collections

1.  **Readonly Types:**
    *   `1.1` **MUST** use `ReadonlyArray<T>`, `ReadonlyMap<K, V>`, and `ReadonlySet<T>` for collections that should not be modified after creation.

2.  **Mutation Prevention:**
    *   `2.1` **MUST NOT** attempt to modify a `Readonly` collection.

3.  **Mutable Copies:**
    *   `3.1` **MAY** create a mutable copy of a `Readonly` collection if modification is required.  Justify this in pushback.

### 7. Destructuring & Naming

1.  **Destructuring:**
    *   `1.1` **MUST** use destructuring to extract multiple properties from objects or elements from tuples/arrays when those properties/elements are used multiple times.

2.  **Destructuring Depth:**
    *   `2.1` **MUST NOT** use deeply nested destructuring.  If destructuring becomes complex or hard to read, extract properties individually.  Limit destructuring to a maximum of two levels.

3.  **Naming Conventions:**
    *   `3.1` **MUST** use descriptive and meaningful variable names.
    *   `3.2` **MUST NOT** use single-letter variable names except for simple loop counters (e.g., `i`, `j`, `k`).
    *   `3.3` **MUST NOT** use abbreviations in variable names unless they are extremely common and unambiguous (e.g., `URL`).
    *   `3.4` **MUST** use `camelCase` for variable and function names.
    *   `3.5` **MUST** use `PascalCase` for class and interface names.

4.  **Destructuring Renaming:**
    *   `4.1` **SHOULD** rename destructured variables only when necessary to avoid naming conflicts or to improve clarity.

### 8. Symbols

1.  **Symbol Usage:**
    *   `1.1` **MUST** use `Symbol()` or `Symbol.for()` only for creating unique keys or for globally shared keys (rare).  Justify the use of Symbols in pushback.

2.  **Symbol Access:**
    *   `2.1` **MUST** use bracket notation to access properties keyed by symbols (e.g., `object[mySymbol]`).

3.  **Symbol Scope:**
    *   `3.1` **SHOULD** keep symbols private or internal to a module unless there is a compelling reason to expose them.

### 9. Utility Types & Manipulation (Consolidated with Section 5)

### 10. Method Return Types

1.  **Explicit Return Types:**
    *   `1.1` **MUST** explicitly specify the return type of all functions and methods.  Do not rely on type inference for function return types.

2.  **Single Responsibility:**
    *   `2.1` **MUST** design functions and methods to have a single, well-defined purpose.
    *   `2.2` **MUST** keep functions and methods concise and focused.

3.  **Method Length:**
     *  `3.1` **SHOULD** avoid excessively long functions or methods. Break down large functions into smaller, more manageable helper functions. Aim for functions to be no longer than 20-30 lines of code, excluding type definitions and whitespace. Justify exceeding this limit.

### 11. No Code Comments (Unless Asked)

1.  **Comments:**
    *   `1.1` **MUST NOT** include inline comments (`// ...`) or block comments (`/* ... */`) in the generated code unless specifically requested by the user.
    *   `1.2` **MAY** generate JSDoc comments (`/** ... */`) only if explicitly requested by the user.

### 12. Pushback & Single Responsibility (Reinforced in Preamble)

### 13. Final Requirements

1.  **Compilation:**
    *   `1.1` **MUST** generate TypeScript code that compiles without errors.

2.  **Linting:**
    *   `1.2` **MUST** generate code that adheres to standard TypeScript linting rules (e.g., consistent indentation, use of semicolons, spacing).  Assume a standard linting configuration.

3.  **Extensibility:**
    *   `3.1` **MUST** strive to produce code that is well-structured, modular, and easy to extend or modify in the future.

4.  **Formatting:**
    *   `4.1` **MUST** consistently use 4 spaces for indentation.
    *   `4.2` **MUST** include semicolons at the end of each statement.
    *   `4.3` **MUST** use consistent spacing around operators and keywords.

5.  **Code Review:**
    * `5.1` **MUST** internally review and validate ALL generated code against this entire ruleset *before* presenting it to the user.

## Example of Pushback (Illustrative)

**User Request:** "Write a function that takes a `ReadonlyArray<number>` and returns a new array with each number doubled.  Modify the original array directly to save memory."

**LLM Response:**

```typescript
// PUSHBACK:
// The user request violates the following rules:
// - 6.2.1: MUST NOT attempt to modify a Readonly collection.
// - 2.3.1: SHOULD favor immutable data structures and operations unless mutation provides a significant and demonstrable performance benefit.
//
// Modifying the original ReadonlyArray is not possible in TypeScript.  It is designed to prevent modification.
// While avoiding a copy *could* save memory, the benefits are often negligible, and immutability provides significant advantages
// in terms of code predictability and preventing unintended side effects.
//
// Proposed Solution (adheres to rules):

function doubleNumbers(numbers: ReadonlyArray<number>): number[] {
  return numbers.map(num => num * 2);
}

// Time Complexity: O(n)

// User, do you understand the implications of modifying a ReadonlyArray and the benefits of immutability?
// Do you still insist on modifying the original array, knowing it's not possible in a type-safe way?  (Yes/No)
