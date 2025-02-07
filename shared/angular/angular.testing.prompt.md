# Angular 19 Best Practices

This document outlines best practices for building Angular applications with version 19. It covers everything from change detection and dependency injection to new reactivity features, dynamic component loading, and performance improvements. These guidelines are based on Angular’s official style guide, the latest Angular Blog posts, and community resources.

---

## 1. Change Detection Strategies

Efficient change detection is key to performance in Angular 19.

### OnPush Strategy

- **Description:**  
  Use the `OnPush` strategy to check a component only when its input reference changes, when an event originates from within, or when `markForCheck()` is called.
- **Benefits:**
  - Reduced change detection cycles
  - Improved predictability and performance
- **Example:**

```typescript
import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-on-push",
  template: `<p>{{ data.title }}</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnPushComponent {
  data = { title: "Angular 19 Rocks!" };
}
```

---

## 2. Providers and Dependency Injection

Angular 19 further emphasizes clean dependency injection using the new `inject()` function.

### Using `inject()` Function

- **Guideline:**  
  Use the `inject()` function for dependency injection instead of traditional constructor injection. This approach is more type-safe and reduces boilerplate.
- **Example:**

```typescript
import { Component, inject } from "@angular/core";
import { UserService } from "./user.service";

@Component({
  selector: "app-profile",
  template: `<p>User profile works!</p>`,
})
export class ProfileComponent {
  // Instead of constructor(private userService: UserService) {…}
  private userService = inject(UserService);
}
```

---

## 3. SCSS Scoping

Maintain style encapsulation using Angular’s ViewEncapsulation and SCSS best practices.

### Recommended Practices

- **Encapsulation Mode:**  
  Use `ViewEncapsulation.Emulated` (the default) to scope styles.
- **Separation:**  
  Extract SCSS into separate files and leverage variables, mixins, and nesting (used sparingly).
- **Example:**

```typescript
import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-styled",
  templateUrl: "./styled.component.html",
  styleUrls: ["./styled.component.scss"],
  encapsulation: ViewEncapsulation.Emulated,
})
export class StyledComponent {}
```

---

## 4. Latest Input, Output, and Model Syntax

Angular 19 introduces new functions for defining component communication with enhanced type safety.

### Inputs

- **Guideline:**  
  Use the `input()` function (instead of the `@Input()` decorator) for type-safe component inputs.
- **Example:**

```typescript
import { Component, input } from "@angular/core";

@Component({
  selector: "app-child",
  template: `<p>{{ data().title }}</p>`,
})
export class ChildComponent {
  data = input<{ title: string }>();
}
```

### Outputs

- **Guideline:**  
  Use the `output()` function to define event emitters.
- **Example:**

```typescript
import { Component, output } from "@angular/core";

@Component({
  selector: "app-child",
  template: `<button (click)="notifyParent()">Click Me</button>`,
})
export class ChildComponent {
  readonly clicked = output<void>();

  notifyParent() {
    this.clicked.emit();
  }
}
```

### Model (Two-Way Binding)

- **Guideline:**  
  Use the `model()` function for two-way data binding.
- **Example:**

```typescript
import { Component, model } from "@angular/core";

@Component({
  selector: "app-toggle",
  template: `
    <label>
      <input type="checkbox" [checked]="checked()" (change)="toggle()" />
      Toggle
    </label>
  `,
})
export class ToggleComponent {
  checked = model<boolean>(false);

  toggle() {
    this.checked.set(!this.checked());
  }
}
```

---

## 5. Signals over Observables

Angular 19 strongly promotes **Signals** as a simpler and more efficient alternative to Observables for state management.

### Best Practices

- **Reactive State:**  
  Use Signals (and computed signals) to manage reactive state.
- **Avoid Template Subscriptions:**  
  Never subscribe to an Observable in the template. Convert observables to signals with `toSignal()` from the interop package.
- **Example:**

```typescript
import { Component } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { someStream$ } from "./data.service";

@Component({
  selector: "app-reactive",
  template: `{{ someValue() }}`,
})
export class ReactiveComponent {
  someValue = toSignal(someStream$);
}
```

---

## 6. Component Injection

Dynamic component injection improves modularity and performance.

### Example: Dynamic Injection

```typescript
import { Component, ViewContainerRef, Injector } from "@angular/core";
import { createComponent } from "@angular/core";

@Component({
  selector: "app-dynamic-loader",
  template: `<ng-container #container></ng-container>`,
})
export class DynamicLoaderComponent {
  constructor(private viewContainerRef: ViewContainerRef, private injector: Injector) {}

  async loadComponent() {
    this.viewContainerRef.clear();
    const { DynamicComponent } = await import("./dynamic.component");
    const componentRef = createComponent(DynamicComponent, {
      environmentInjector: this.viewContainerRef.injector,
    });
    this.viewContainerRef.insert(componentRef.hostView);
  }
}
```

---

## 7. Lazy Loading Components

Lazy loading components reduces initial load times by loading code only when needed.

### Example: Route-Based Lazy Loading

```typescript
import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "feature",
    loadComponent: () => import("./feature.component").then((m) => m.FeatureComponent),
  },
];
```

---

## 8. Provider Functions

Define dependencies with flexible provider functions using options such as `useClass`, `useExisting`, `useFactory`, and `useValue`.

### Factory Providers

```typescript
import { Injectable } from "@angular/core";

export function loggerFactory() {
  return new Logger("AppLogger");
}

@Injectable({
  providedIn: "root",
  useFactory: loggerFactory,
})
export class Logger {
  constructor(private name: string) {}

  log(message: string) {
    console.log(`[${this.name}] ${message}`);
  }
}
```

---

## 9. Additional Angular 19 Guidelines

### Standalone Components and Strict Standalone Enforcement

- **Default Behavior:**  
  Angular 19 now defaults to standalone components. Ensure that non-standalone components are migrated if needed.
- **Compiler Flag:**  
  Enable `strictStandalone` in your `tsconfig.json` to enforce standalone components.

```json
{
  "angularCompilerOptions": {
    "strictStandalone": true
  }
}
```

### Embrace Signals and New Reactivity APIs

- Use signals, computed signals, and linked signals for reactive state.
- Replace lifecycle hook logic with reactive effects when possible.
- Avoid traditional lifecycle hooks if you can manage state with signals.

### Zoneless Angular

- Angular 19 makes strides toward a zoneless runtime. Prepare your app for this future by:
  - Using `OnPush` change detection.
  - Embracing signals for fine-grained reactivity.
  - Testing your app with the experimental zoneless provider if available.

### Incremental Hydration & Event Replay (SSR)

- **Incremental Hydration:**  
  Use `@defer` syntax in your templates to lazily hydrate components as they enter the viewport.
- **Event Replay:**  
  Enable event replay to capture and replay user interactions while your app loads.

```typescript
import { provideClientHydration, withIncrementalHydration } from "@angular/platform-browser";

bootstrapApplication(AppComponent, {
  providers: [provideClientHydration(withIncrementalHydration())],
});
```

### Modernized Dependency Injection

- **Inject() over Constructors:**  
  Use the new `inject()` function to simplify dependency injection.
- **Constructor-Free Approach:**  
  Initialize services and reactive state directly as class fields using `inject()`.

### Immutability and Type Safety

- Use `readonly` modifiers and utility classes for arrays, tuples, and function arguments to enforce immutability.
- Avoid the `any` type and excessive use of the non-null assertion operator (`!`). Instead, use optional chaining (`?.`) and nullish coalescing (`??`).

### Template Best Practices

- **No Inline Styles:**  
  Never use inline styles; maintain styles in dedicated SCSS/CSS files.
- **Avoid Calling Methods in Templates:**  
  Use signals or getters sparingly; compute values in the component class to improve performance.
- **Self-Closing Void Elements:**  
  Always use self-closing tag syntax for void elements (e.g., `<img />`, `<input />`).

---

## 10. Reflective Questions

1. **Stand-alone and Signals:**  
   How will migrating to standalone components and fully embracing Signals change your project’s structure and performance?

2. **Zoneless Readiness:**  
   Is your current application structured to benefit from a zoneless architecture, and what steps can you take to test that transition?

3. **Dependency Injection:**  
   How can using the new `inject()` function simplify your codebase and improve testability compared to traditional constructor injection?

4. **Reactive Patterns:**  
   What benefits have you experienced (or do you expect) by replacing observables with Signals and computed signals in your Angular templates?
