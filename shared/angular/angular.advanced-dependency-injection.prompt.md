# Angular Dependency Injection Generation Ruleset for AI Agents: Advanced Practices (Angular 19+)

**Objective:** To provide a concise ruleset for AI agents to generate **high-quality**, **efficient**, **maintainable**, and **robust** Angular code utilizing **advanced Dependency Injection (DI) best practices** in Angular 19 and beyond. This ruleset emphasizes modern DI techniques using `inject()`, dynamic component injection, lazy loading, provider functions, injection tokens, and SOLID principles.

**I. Core Principles: `inject()`, Efficiency, and SOLID**

1.  **`inject()` as Default DI Mechanism:** **RULE:** **ALWAYS prefer the `inject()` function for dependency injection in Angular components, directives, services, and other injectable classes.** Use constructor injection only for specific legacy scenarios or when explicitly necessary for framework interoperability (which should be rare in modern Angular). **Rationale:** `inject()` is the modern, type-safe, and more concise way to perform dependency injection in Angular 19+, reducing boilerplate and improving code readability.

2.  **Performance-Focused DI:** **RULE:** **DESIGN dependency injection configurations and component architecture with *performance in mind*.** Utilize lazy loading, dynamic injection, and efficient provider strategies to minimize initial load times, bundle sizes, and unnecessary component creation or service instantiation. **Rationale:** Efficient DI contributes significantly to Angular application performance, especially in large applications with numerous components and services.

3.  **SOLID Principles for DI Robustness:** **RULE:** **ADHERE to SOLID principles (especially Liskov Substitution Principle and Single Responsibility Principle) when designing dependency injection structures and services.**  Promote decoupling, substitutability, and maintainability through interface-based programming and well-defined service responsibilities within the DI system. **Rationale:** SOLID principles lead to more robust, testable, and maintainable Angular applications. Applying them to DI makes the application more flexible and less prone to breaking changes.

**II. `inject()` Function Rules: Modern Injection Method**

4.  **`inject()` for Constructor Replacement:** **RULE:** **Favor `inject()` function *within component/service classes* to replace traditional constructor-based dependency injection.** Use `private readonly service = inject(MyService);` for concise and type-safe injection within class bodies. **Rationale:** `inject()` provides a cleaner, more readable, and type-safe alternative to constructor injection, especially for standalone components and modern Angular styles.

5.  **Type Safety with `inject()` (Generic Type Parameter):** **RULE:** **ALWAYS use the generic type parameter with `inject()` to ensure *strong type safety* for injected dependencies.**  Explicitly specify the type of the injected service or token: `private readonly service = inject<MyService>(MyServiceToken);` (or `inject(MyService)` if directly injecting a class). **Rationale:** Type safety with `inject()` improves code reliability, reduces runtime errors, and provides better IDE support through type checking and autocompletion.

6.  **`inject()` Outside Constructor (Component Class Body):** **RULE:** **Utilize `inject()` directly in the *component or service class body* (outside the constructor) for a more streamlined and declarative injection style.**  This is the recommended pattern for modern Angular applications.  **Rationale:** Class-body `inject()` is more concise and aligns with modern Angular patterns, reducing constructor boilerplate and improving component/service readability.

**III. Dynamic Component Injection Rules: Modularity and On-Demand Loading**

7.  **Dynamic Injection for Modularity & Lazy Loading UI Features:** **RULE:** **EMPLOY dynamic component injection for UI features or components that can be loaded *on-demand* or conditionally at runtime.**  Use `createComponent()` to dynamically create component instances and insert them into the view using `ViewContainerRef`. **Rationale:** Dynamic component injection improves modularity by separating concerns and enhances performance by loading UI components only when they are actually needed or triggered by user interactions.

8.  **`createComponent()` with `ViewContainerRef` for Dynamic Insertion:** **RULE:** **Utilize `createComponent(ComponentClass, { viewContainerRef: ..., injector: ... })` function in combination with `ViewContainerRef` to dynamically create component instances and insert them into the DOM.** Understand the parameters of `createComponent()` for configuring dynamic components, including providing an `environmentInjector`. **Rationale:** `createComponent()` API is the core mechanism for dynamic component injection in Angular.  `ViewContainerRef` provides the insertion point in the DOM, and injector management ensures correct dependency scope.

9.  **Lazy Loading Modules vs. Dynamic Component Injection (Choose Appropriately):** **RULE:** **CHOOSE between lazy-loading *modules* (via Angular Router) and dynamic *component* injection based on the scope and granularity of lazy loading needed.** Lazy-loading modules is suitable for feature-level code splitting, while dynamic component injection is more appropriate for loading individual UI components on-demand within a component or feature. **Rationale:** Module lazy loading and dynamic component injection are complementary techniques. Module lazy loading is for larger feature separation, dynamic component injection for finer-grained, on-demand component instantiation.

**IV. Lazy Loading Component Rules: Initial Load Optimization**

10. **Lazy Load Routes & Feature Modules Primarily (Angular Router):** **RULE:** **Prioritize lazy-loading Angular *feature modules* via the Angular Router to optimize initial application load time.** Configure routes with `loadChildren` to load modules and their components only when the route is activated. This is the *primary* method for lazy loading in Angular applications. **Rationale:** Lazy loading modules via the Router is the most effective way to reduce initial bundle size and improve initial page load performance by deferring the loading of entire feature sets.

11. **`loadComponent` for Route-Based Lazy Loading (Standalone Components):** **RULE:** **For standalone components used as route components, utilize `loadComponent` in route configurations with `() => import(...)` syntax to enable route-based lazy loading of individual components directly.** This is a modern approach for lazy-loading standalone components in Angular 19+. **Rationale:** `loadComponent` allows for streamlined route-based lazy loading for standalone components without requiring feature modules in certain scenarios, simplifying lazy loading configuration.

12. **Identify Lazy Loading Candidates (Large Features, Infrequently Used UI):** **RULE:** **Identify *feature modules* or *components* that are good candidates for lazy loading.**  Focus on modules or components that are:
    *   *Large in size* and contribute significantly to initial bundle size.
    *   *Used less frequently* by users during typical initial application usage patterns.
    *   *Not essential for the critical path* rendering of the application's core functionality.
    *   *Located below-the-fold* or part of secondary or optional UI features. **Rationale:** Strategic lazy loading targeting these types of modules or components maximizes the performance benefits of deferred code loading.

**V. Provider Function & Injection Token Rules: Flexibility & Decoupling**

13. **Factory Providers for Complex Dependency Creation Logic:** **RULE:** **UTILIZE Factory Providers (`useFactory` in `@Injectable` or `providers` array) when dependency creation requires *complex logic*, *conditional instantiation*, *runtime configuration*, or *asynchronous operations*.** Factory providers offer flexibility in controlling how dependencies are instantiated and provided. **Rationale:** Factory providers are powerful for managing complex dependency creation scenarios that go beyond simple class instantiation.

14. **Injection Tokens for Interface-Based Programming & Decoupling:** **RULE:** **USE Injection Tokens ( `new InjectionToken<InterfaceType>('TokenName')` ) to provide *interfaces* or *abstract types* as dependencies instead of concrete classes.** Inject tokens in components and services and configure providers to map tokens to concrete implementations (using `useClass`, `useFactory`, `useValue`, `useExisting`).  This promotes decoupling, testability, and adherence to the Liskov Substitution Principle. **Rationale:** Injection Tokens and interface-based DI improve decoupling, making Angular applications more modular, testable, and adaptable to changes in implementations without breaking consuming components or services.

15. **Provider Scope - `providedIn: 'root'` vs. Component-Level Providers:** **RULE:** **Choose appropriate provider scope (`providedIn: 'root'` or component-level providers in `providers` array of `@Component` or `@NgModule`) based on the *intended scope and sharing* of the dependency.** Use `providedIn: 'root'` for singleton services shared across the entire application. Use component-level providers for services intended to be scoped to a specific component and its subtree, creating component-specific instances. **Rationale:** Correct provider scope management ensures dependencies are available where needed and follow appropriate instantiation patterns (singleton vs. component-scoped instances).

**VI. SOLID Principles & DI Rules: Robust DI Architecture**

16. **Liskov Substitution Principle (LSP) through DI:** **RULE:** **DESIGN DI configurations to adhere to the Liskov Substitution Principle.**  When using Injection Tokens to provide interfaces, ensure that *different concrete implementations* provided for the same token are *interchangeable without breaking consuming components or services.*  Implementations should fulfill the contract defined by the interface and behave consistently from the perspective of clients. **Rationale:** LSP ensures that DI makes the system more flexible and less brittle. Substitutable implementations allow for easier testing, feature variations, and evolution of the application without widespread code changes.

17. **Single Responsibility Principle (SRP) for Services:** **RULE:** **DESIGN Angular Services to adhere to the Single Responsibility Principle.** Services should have a *focused, well-defined responsibility* and encapsulate a specific set of related functionalities or data access logic. Avoid creating "God object" services that handle too many unrelated tasks. **Rationale:** SRP makes services more reusable, testable, and maintainable. Focused services are easier to understand, modify, and test in isolation.

18. **Interface Segregation Principle (ISP - Interface-Based DI):** **RULE:** **Employ interface-based programming with Injection Tokens to follow Interface Segregation Principle *implicitly*.** Interfaces provided via tokens should be focused and represent a specific, cohesive set of functionalities or data access related to the service's responsibility.  Avoid creating "fat interfaces" with too many unrelated methods. **Rationale:** ISP, applied through interface-based DI, leads to more modular and cohesive service abstractions. Focused interfaces are easier to implement, test, and consume, promoting cleaner service APIs.

**VII. AI Agent Verification Checklist (Advanced DI Practices):**

Before finalizing generated Angular code with advanced Dependency Injection, verify adherence to these rules using the following checklist:

*   [ ] **`inject()` Function as Default:** Is the `inject()` function used as the primary method for dependency injection (not constructor injection except for justified legacy/interop cases)?
*   [ ] **Type Safety with `inject()`:** Is the generic type parameter consistently used with `inject()` for type safety?
*   [ ] **Dynamic Component Injection (Where Applicable):** Is dynamic component injection considered and implemented for UI features suitable for on-demand loading or modularity?
*   [ ] **Lazy Loading Modules/Components (Route-Based):** Is route-based lazy loading configured for feature modules or standalone components to optimize initial load time?
*   [ ] **Factory Providers for Complex Logic:** Are Factory Providers used where dependency creation requires complex logic, runtime configuration, or asynchronous operations?
*   [ ] **Injection Tokens for Interfaces (Decoupling):** Are Injection Tokens used to provide interfaces as dependencies, promoting decoupling and substitutability?
*   [ ] **Provider Scope Management (`providedIn: 'root'` vs. Component-Level):** Is provider scope ( `providedIn: 'root'` or component-level ) appropriately chosen based on the intended service sharing and lifecycle?
*   [ ] **SOLID Principles Adherence (LSP, SRP, ISP):** Does the DI design adhere to SOLID principles, particularly LSP and SRP, ensuring robustness and maintainability?
*   [ ] **Performance-Conscious DI:** Is the DI configuration optimized for performance, considering lazy loading, dynamic injection, and efficient provider strategies?
