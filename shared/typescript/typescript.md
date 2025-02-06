
## TypeScript

- **Enable Strict Type-Checking:** Set `"strict": true` in `tsconfig.json` for comprehensive type-checking.
- **Avoid `any` Type:** Use precise types or generics instead of the `any` type to maintain type safety.
- **Explicit Typing:** Always specify return types for functions and types for parameters to enhance clarity and maintainability.
- **Interface Naming Conventions:**
  - Prefix interfaces with an uppercase 'I' (e.g., `IUser`).
  - Suffix interface files with `.interface.ts` (e.g., `user.interface.ts`).
- **Leverage ES6 Features:** Utilize arrow functions, modules, and destructuring for cleaner and more modern code.
- **Consistent Naming Conventions:** Maintain uniform naming conventions for variables, functions, and classes to ensure readability.
- **Import Management:** Regularly organize and remove unused imports to keep the codebase tidy.
- **Encapsulation with Private Fields:** Must use hard private fields (prefixed with `#`) in classes to enforce encapsulation.
- **Immutability:**
  - **Default Immutability:** Must Treat objects, arguments, and data structures as immutable by default.
  - **Readonly Parameters:** Must Mark function arguments as `readonly` where possible to prevent mutations. 'readonly' type modifier is only permitted on array and tuple literal types.
  - **Deep Immutability:** Apply `readonly` recursively to nested objects and arrays to enforce deep immutability.
  - **Readonly Return Types:** Must Use `readonly` for return types when the returned data should remain unmodified.
- **Reactive Programming:**
  - **Prefer Signals:** Must Favor signals over observables for reactive patterns.
  - **Manage Observables:** Use async pipes or proper unsubscription techniques (e.g., `takeUntil` with a `Subject`) to manage observables effectively.
- **Documentation:**
  - **Self-Explanatory Code:** Must Write clear and self-explanatory code to minimize the need for logic comments.
- **Generics:** Utilize generics to enhance code reusability and type safety across components, functions, and classes.
