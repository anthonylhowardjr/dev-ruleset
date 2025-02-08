# Angular Signals Generation Ruleset for AI Agents: Preferred State Management (Angular 19+)

**Objective:** To provide a concise ruleset for AI agents to generate high-quality, efficient, and type-safe Angular code using Signals for state management, adhering to best practices in Angular 19 and beyond.

**I. Core Principles: Signals First, Observables Sparingly**

1.  **Default to Signals:** **RULE:** **ALWAYS prefer Signals as the primary mechanism for managing reactive state in Angular components and services.** Use `signal()`, `computed()`, `input()`, `output()`, and `effect()` by default for state management, derived values, component inputs/outputs, and side effects. **Rationale:** Signals offer simplicity, efficiency, and improved type safety compared to Observables in Angular 19+ for most state management needs.

2.  **Observables for Interop & External Data Streams:** **RULE:** **RESERVE Observables primarily for interoperability with external data streams (e.g., HTTP services, WebSockets) and when working with existing Observable-based libraries or APIs.**  Convert Observables to Signals using `toSignal()` for template binding and internal component state management whenever feasible. **Rationale:**  Observables remain relevant for asynchronous operations and external data handling but Signals are preferred for internal reactive logic within Angular applications.

**II. State Management Rules: Signals in Action**

3.  **`signal()` for Mutable State:** **RULE:** **USE `signal()` to define mutable, reactive state within components and services.** `signal()` is the fundamental building block for creating reactive values that Angular can efficiently track and update. **Rationale:** `signal()` provides a direct and type-safe way to create and update mutable state in Angular applications, triggering change detection efficiently.

4.  **`computed()` for Derived State:** **RULE:** **USE `computed()` to create derived signals that automatically recalculate their values based on dependencies on other signals.**  `computed()` signals ensure efficient and reactive updates for derived data, avoiding manual recalculations and template logic. **Rationale:** `computed()` enables declarative and efficient management of derived state, automatically updating only when its dependencies change, improving performance and code clarity.

5.  **`effect()` for Reactive Side Effects (Lifecycle Hook Replacement):** **RULE:** **REPLACE traditional lifecycle hook logic (like `ngOnInit`, `ngOnChanges`, `ngDoCheck` where state-reactive behavior is needed) with `effect()` for managing reactive side effects.**  `effect()` automatically reacts to signal changes and executes side effect logic declaratively.  **Rationale:** `effect()` centralizes side effect management in a reactive manner, improving code clarity and reducing the need for manual change detection logic within lifecycle hooks.

6.  **`linkedSignal()` for Relative State (Advanced Use Cases):** **RULE:** **USE `linkedSignal()` judiciously for advanced scenarios where you need to create a signal that maintains a direct, two-way binding or dependency relationship with another signal.**  `linkedSignal()` is for specialized cases and should not be the default approach. **Rationale:** `linkedSignal()` provides a more specialized form of reactive connection between signals for complex state relationships, but should be used intentionally for specific scenarios.

**III. Component Input/Output Rules: Signal-Based Approach**

7.  **`input()` for Component Inputs (Type Safety):** **RULE:** **ALWAYS use `input()` to define component inputs.** Leverage `input.required<Type>()` for required inputs and `input<Type>(defaultValue)` for optional inputs with default values, enforcing type safety for component input data.  **Rationale:** `input()` provides a type-safe and signal-based approach to defining component inputs, replacing the traditional `@Input()` decorator for improved clarity and type enforcement.

8.  **`output()` for Component Event Emitters (Signal-Based Events):** **RULE:** **USE `output()` to define component event emitters.**  `output()` creates a signal-based emitter that is more efficient and consistent than the traditional `@Output()` and `EventEmitter`.  Use `.emit(value)` on the `output()` signal to emit events.  **Rationale:** `output()` provides a signal-based, type-safe, and more streamlined way to define and emit custom component events, offering a modern alternative to `@Output()` and `EventEmitter`.

**IV. Template Binding Rules: Signals in Templates**

9.  **Template Binding - Direct Signal Invocation (`signal()`):** **RULE:** **In Angular templates, bind directly to signals by invoking them as functions (`{{ mySignal() }}`).**  Angular change detection efficiently tracks signal dependencies in templates, ensuring only necessary parts of the template are updated. **Rationale:**  Direct signal invocation in templates provides the most performant and reactive way to display signal values, leveraging Angular's change detection system efficiently.

10. **`@let` for Computed Values in Templates:** **RULE:** **USE `@let` template syntax (e.g., `@let computedValue = myComputedSignal();`) to declare local template variables for computed signal values that are used multiple times in a template section or when you need to access the computed value without repeated function calls.** **Rationale:** `@let` improves template readability and can slightly optimize performance by avoiding redundant calls to computed signals within the same template section.

11. **`@defer` with Signals (for Deferred Loading):** **RULE:** **LEVERAGE `@defer` block (when appropriate for performance optimization of non-critical content) in conjunction with signals for deferred loading of components or template sections.**  `@defer` can be combined with signal-based conditions (e.g., `@defer (when mySignal()) { ... }`) to control deferred loading based on reactive state. **Rationale:** `@defer` enhances performance by lazy-loading parts of the template, and combining it with signals allows for reactive control over deferred loading based on application state.

12. **`@for` with `trackBy` and Signals for Iteration:** **RULE:** **When using `@for` loops in templates for iterative rendering of data (especially lists or collections), ALWAYS use `trackBy` function in conjunction with a unique identifier signal (or a stable identifier in the data).** This is crucial for efficient change detection and DOM updates in iterative rendering. **Rationale:** `trackBy` significantly improves performance of `@for` loops, especially with dynamic lists, by allowing Angular to efficiently track changes and only update necessary DOM elements during list updates.

13. **Never Subscribe to Observables Directly in Templates:** **RULE:** **NEVER subscribe to Observables directly within Angular templates using the `async` pipe (`{{ myObservable | async }}`).** This anti-pattern leads to performance issues, potential memory leaks, and less predictable change detection. **ALWAYS convert Observables to Signals using `toSignal()` for template binding.** **Rationale:** Direct Observable subscriptions in templates create unnecessary overhead, manual subscription management complexity, and can lead to less performant and less maintainable Angular applications.

**V. Code Organization & Best Practices**

14. **Signals in Services for Shared State:** **RULE:** **USE Signals in Angular Services to manage application-wide shared state.** Services are the appropriate place to hold and manage state that needs to be accessible and reactive across multiple components. Components should consume and react to signals from services, not duplicate state management logic. **Rationale:** Services are ideal for centralized, shareable state management in Angular. Signals in services promote a clear separation of concerns and improve state management architecture.

15. **Descriptive Signal Names:** **RULE:** **USE clear and descriptive names for signals.** Signal names should accurately reflect the *state* they hold or the *derived value* they compute (e.g., `userName`, `isLoggedIn`, `productPrice`, `cartItemsCount`). **Rationale:**  Descriptive signal names significantly improve code readability and make it easier to understand the purpose and usage of different signals in your application.

16. **Group Related Signals:** **RULE:** **ORGANIZE related signals logically within components and services.** Group signals that are conceptually related or part of the same feature set together in your code for better code organization and maintainability.  **Rationale:** Logical grouping enhances code structure and makes it easier to navigate and understand state management logic within components and services.

17. **Comment Complex Signal Logic (Especially `computed()` and `effect()`):** **RULE:** **COMMENT CSS code for complex signal logic, especially for `computed()` signals with intricate derivation logic and `effect()` blocks that perform non-obvious side effects.** Explain the purpose and dependencies of computed signals and the intended side effects of `effect()` blocks.  **Rationale:** Clear comments improve code understanding and maintainability, especially for non-trivial reactive logic using `computed()` and `effect()`.

**VI. Reflective Verification Checklist for AI Agents:**

Before finalizing generated Angular code using Signals, verify adherence to these rules using the following checklist:

*   [ ] **Signals as Primary State Management:** Is Signal API (`signal()`, `computed()`, `effect()`, `input()`, `output()`) used as the *default* mechanism for component state management?
*   [ ] **Observables Converted to Signals for Templates:** Are Observables (if used) converted to Signals using `toSignal()` *before* binding them in templates? (No `async` pipe for direct Observable binding in templates).
*   [ ] **`computed()` for Derived State:** Are `computed()` signals used for all derived state based on other signals, avoiding manual recalculations?
*   [ ] **`effect()` for Reactive Side Effects (Lifecycle Hook Alternatives):** Is `effect()` used where state-reactive side effects are needed, minimizing lifecycle hook usage for such logic?
*   [ ] **`input()` and `output()` for Component Communication:** Are `input()` and `output()` used for component inputs and event emitters, enforcing type safety?
*   [ ] **`@let` for Computed Values in Templates (Optimized Access):** Is `@let` used for frequently accessed computed signals in templates to improve readability and potentially performance?
*   [ ] **`@for` with `trackBy` for Iteration Performance:** Is `trackBy` function used with `@for` loops for efficient list rendering?
*   [ ] **Descriptive Signal Names and Code Comments:** Are signals named descriptively? Is complex signal logic (especially in `computed()` and `effect()`) commented clearly?
*   [ ] **Signals in Services for Shared State:** Is shared application state managed in Angular Services using Signals, not duplicated in components?
*   [ ] **Performance Considerations:** Are best practices for efficient signal usage considered (avoiding excessive signal updates in tight loops, understanding change detection implications)?
