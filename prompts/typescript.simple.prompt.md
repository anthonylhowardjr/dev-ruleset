# AI TypeScript Ruleset: Strict & Unambiguous

## Preamble

This ruleset governs ALL TypeScript code generation. It is absolute and must be followed without exception. The goal is to produce clean, maintainable, and performant TypeScript code.

### Enforcement

As an AI assistant, you MUST:

1. **Generate** TypeScript code that adheres to these rules
2. **Validate** your generated code against every rule
3. **Correct** any violations before presenting code
4. **Push back** if the user's request requires violating rules:
   - Clearly state the violated rule(s)
   - Explain why the request violates the rule(s)
   - Propose the closest compliant alternative
   - Only proceed with a violation after explicit user confirmation

## LLM Agent Instructions

When generating TypeScript code:

1. **Parse requirements** carefully, identifying input types, output types, and edge cases
2. **Plan your solution** before writing code:
   - Determine appropriate data structures
   - Consider time and space complexity
   - Identify potential error conditions
3. **Apply rules in this priority order**:
   - Type safety (explicit typing)
   - Error handling
   - Performance
   - Readability
   - Style conformance
4. **Validate** your code against the checklist before presenting it
5. **Explain** your implementation choices when they represent significant design decisions
6. **Follow** the patterns demonstrated in the examples section

## Definitions

- **MUST**: An absolute requirement. No exceptions.
- **MUST NOT**: An absolute prohibition. No exceptions.
- **SHOULD**: A strong recommendation. Deviations require justification.
- **MAY**: Permitted, but consider alternatives first.
- **Trivial Variable**: A variable with an obvious type from initialization (e.g., `const x = 5`).
- **Non-Trivial Variable**: A variable with a non-obvious type (e.g., complex objects, function parameters).

## Core Rules

### 1. Variables & Types

#### 1.1 Declaration
- **MUST** use `const` for values that don't change after initialization
- **MUST** use `let` only when reassignment is necessary
- **MUST NOT** use `var` under any circumstances
- **MUST** declare variables in the narrowest possible scope
- **MUST** initialize variables at declaration unless there's a justifiable reason

#### 1.2 Typing
- **MUST** explicitly type all Non-Trivial Variables
- **SHOULD** use type inference for Trivial Variables
- **MUST** explicitly specify return types for all functions and methods
- **MUST** use TypeScript's advanced type features when appropriate
- **MUST** break down complex types into well-named type aliases

#### 1.3 Collections
- **MUST** use `ReadonlyArray<T>`, `ReadonlyMap<K, V>`, and `ReadonlySet<T>` for immutable collections
- **MUST NOT** attempt to modify readonly collections
- **MUST** use appropriate data structures for efficient operations

### 2. Functions & Methods

#### 2.1 Structure
- **MUST** design functions with a single, well-defined purpose
- **SHOULD** limit function length to 20-30 lines of code
- **MUST** validate function inputs against null/undefined and unexpected types

#### 2.2 Return Values
- **MUST** explicitly specify the return type of all functions
- **MUST** handle potential errors explicitly
- **MUST** fail fast: handle error conditions immediately

### 3. Classes & Interfaces

#### 3.1 Interfaces
- **MUST** prefix interface names with `I` (e.g., `interface IUserData`)
- **SHOULD** use built-in utility types (`Pick`, `Omit`, etc.) to avoid redundant definitions

#### 3.2 Classes
- **MUST** use the `#` prefix for truly private class fields (e.g., `#privateField`)
- **MUST** maintain proper encapsulation (private/protected members for internal logic)
- **MAY** use techniques to prevent subclassing if the class is not designed for inheritance

### 4. Error Handling

- **MUST** use `try...catch` blocks for operations that might throw exceptions
- **MUST** throw specific, informative errors (e.g., `throw new Error("Invalid input: parameter X must be positive")`)
- **MUST NOT** swallow or ignore errors

### 5. Performance

- **MUST** strive for optimal time complexity, prioritizing O(1) or O(log n) when possible
- **SHOULD** favor immutable operations unless mutation provides significant benefits
- **MUST** state time complexity when requested: `// Time Complexity: O(...)`

### 6. Code Style

#### 6.1 Naming
- **MUST** use descriptive and meaningful variable names
- **MUST NOT** use single-letter names except for simple loop counters
- **MUST** use `camelCase` for variables and functions
- **MUST** use `PascalCase` for classes and interfaces

#### 6.2 Structure
- **MUST** use destructuring to extract multiple properties but limit to two levels
- **SHOULD** rename destructured variables only when necessary
- **MUST NOT** include comments unless specifically requested
- **MUST** use 4 spaces for indentation
- **MUST** include semicolons at the end of statements

## Implementation Patterns

### Preferred Patterns

#### Data Transformation
```typescript
// PREFERRED: Pure function pattern
function transformData(input: ReadonlyArray<IInputType>): IOutputType[] {
    return input.map(item => ({
        id: item.id,
        name: item.name,
        value: calculateValue(item)
    }));
}

function calculateValue(item: IInputType): number {
    // Pure calculation logic
    return item.baseValue * item.multiplier;
}
```

#### Error Handling
```typescript
// PREFERRED: Early validation with specific errors
function processUserData(userData: IUserData | undefined): IProcessedData {
    if (!userData) {
        throw new Error("userData is required");
    }
    
    if (!userData.id || userData.id.trim() === "") {
        throw new Error("userData.id is required and cannot be empty");
    }
    
    // Processing after validation
    return {
        // ...processed data
    };
}
```

#### Type Guards
```typescript
// PREFERRED: User-defined type guards
function isValidResponse(response: unknown): response is IApiResponse {
    return (
        typeof response === "object" &&
        response !== null &&
        "data" in response &&
        "status" in response &&
        typeof response.status === "number"
    );
}

function handleResponse(response: unknown): IProcessedData {
    if (!isValidResponse(response)) {
        throw new Error("Invalid API response");
    }
    
    // Now TypeScript knows response is IApiResponse
    return processData(response.data);
}
```

### Patterns to Avoid

#### Avoid: Mutation-Heavy Code
```typescript
// AVOID: Mutating input parameters
function processItems(items: IItem[]): void {
    for (let i = 0; i < items.length; i++) {
        items[i].processed = true;
        items[i].value *= 2;
    }
}

// BETTER: Return new array
function processItems(items: ReadonlyArray<IItem>): IItem[] {
    return items.map(item => ({
        ...item,
        processed: true,
        value: item.value * 2
    }));
}
```

#### Avoid: Type Casting
```typescript
// AVOID: Type assertions without validation
function handleData(data: unknown): IProcessedData {
    const userData = data as IUserData; // Dangerous!
    return processUserData(userData);
}

// BETTER: Validate before casting
function handleData(data: unknown): IProcessedData {
    if (!isUserData(data)) {
        throw new Error("Invalid user data");
    }
    // Now this is safe
    return processUserData(data);
}

function isUserData(data: unknown): data is IUserData {
    // Implement proper validation
    return (
        typeof data === "object" &&
        data !== null &&
        "id" in data &&
        "name" in data
    );
}
```

## Validation Checklist

Before returning code, verify:

1. **Types**: All non-trivial variables, parameters, and return values are explicitly typed
2. **Error handling**: All potential errors are handled appropriately
3. **Immutability**: `const` is used wherever possible, readonly collections used for immutable data
4. **Naming**: All variables, functions, classes, and interfaces follow naming conventions
5. **Structure**: Functions are single-purpose and appropriately sized
6. **Performance**: Data structures and algorithms are efficient for the use case
7. **Style**: Code follows 4-space indentation, uses semicolons, and has consistent spacing
8. **Privacy**: Class members use proper access modifiers and private fields use `#` prefix
9. **Checks**: Input validation is performed where needed
10. **Initialization**: Variables are initialized at declaration when possible

## Examples

### Complete Example: Data Processing Function

**Good Example:**

```typescript
interface IUserData {
    id: string;
    name: string;
    age?: number;
    scores: number[];
}

interface IProcessedUser {
    id: string;
    displayName: string;
    isAdult: boolean;
    averageScore: number;
}

/**
 * Processes raw user data into a standardized format
 */
function processUsers(users: ReadonlyArray<IUserData>): IProcessedUser[] {
    if (!users || users.length === 0) {
        return [];
    }
    
    return users.map(user => {
        // Validate individual user
        if (!user.id || user.id.trim() === "") {
            throw new Error("User ID is required");
        }
        
        const { id, name, age = 0, scores } = user;
        
        // Calculate average score safely
        const averageScore: number = scores.length > 0
            ? scores.reduce((sum, score) => sum + score, 0) / scores.length
            : 0;
        
        return {
            id,
            displayName: name || "Anonymous",
            isAdult: age >= 18,
            averageScore
        };
    });
}

// Time Complexity: O(n) where n is the number of users
```

### Pushback Example

**User Request:** "Write a function that takes a `ReadonlyArray<number>` and doubles all values by modifying the original array."

**Correct Response:**

```typescript
// PUSHBACK:
// This request violates rule 1.3: "MUST NOT attempt to modify readonly collections"
//
// ReadonlyArray is designed to be immutable, and TypeScript prevents direct modification.
// Instead, I can create a function that returns a new array with doubled values.

function doubleNumbers(numbers: ReadonlyArray<number>): number[] {
    return numbers.map(num => num * 2);
}

// Time Complexity: O(n)

// If you still need to modify an array in-place, I can provide a version that works
// with a mutable array instead. Would you like me to do that?
