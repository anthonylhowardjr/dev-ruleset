# Angular

## Table of Contents

1. [Change Detection Strategies](#change-detection-strategies)
2. [Providers and Dependency Injection](#providers-and-dependency-injection)
3. [SCSS Scoping](#scss-scoping)
4. [Latest Input, Output, and Model Syntax](#latest-input-output-and-model-syntax)
5. [Signals over Observables](#signals-over-observables)
6. [Component Injection](#component-injection)
7. [Lazy Loading Components](#lazy-loading-components)
8. [Provider Functions](#provider-functions)

---

Important: Must use the `inject()` function to define component inputs with type safety. Do not use the `@Input()` decorator for defining inputs.

Important: Must use the hard privates fields (prefixed with `#`) in classes to enforce encapsulation.

Important: Must dynamically inject the component and lazily load the component.

Important: Must use the `input()`, `output()`, and `model()` functions for defining inputs, outputs, and models, respectively.

Important: Must use signals over observables for reactive patterns.

Important: Must use the `useFactory` option for defining provider functions.

Important: Must use self-explanatory code to minimize the need for logic comments.

Important: Must use the `OnPush` change detection strategy to optimize performance.

Important: Must use the `ViewEncapsulation.Emulated` mode for style encapsulation.

Important: Must use self-closing tag syntax for void elements (e.g., `<img />`, `<input />`).

Important: Must use the `createComponent()` function to dynamically create and insert components into the application.

Important: Must use immutable objects and deep immutability to prevent unintended mutations by default.

Important: Must use the readonly utilities classes for function arguments and return types to enforce immutability by default.

Important: Must use the `readonly` modifier or utilities classes for array and tuple literal types to prevent mutations.

Important: Must generate the highest quality code by following the best practices and guidelines.

Important: Must use the `useClass`, `useExisting`, `useFactory`, and `useValue` options for defining provider functions.

Important: Must use the the most performant solutions. Seek for O(1)

Important: Use computed Signals over getters for performance.

Important: Never use inline styling.

Important: Never call methods in templates. Complex logic should be handled in the component class or service.

Important: Avoid using `any` type. Use specific types whenever possible.

Important: Avoid using `!` operator to assert non-null values. Use optional chaining and nullish coalescing operators instead.

Important: Only use signal in the template. Don't call methods in the template.

Important: Favor signals over getters.

Important: Never subscribe to an Observable in the class or in a signal.

Important: Must use the `inject()` function to define component inputs with type safety. Do not use the `@Input()` decorator for defining inputs.

---

## Change Detection Strategies

Efficient change detection is crucial for optimal application performance. Angular offers strategies to control how and when components are checked for changes.

**OnPush Change Detection Strategy:**

The `OnPush` strategy instructs Angular to check a component for changes only when:

- An input property reference changes.
- An event originates from the component or its children.
- `markForCheck()` is invoked manually.

**Implementation:**

```typescript
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-on-push-component',
  template: `<p>{{ data.title }}</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent {
  @Input() data!: { title: string };
}
```

**Benefits:**

- **Performance:** Reduces the number of change detection cycles, enhancing performance.
- **Predictability:** Changes are detected only when specific conditions are met, making the application behavior more predictable.

**Considerations:**

- Ensure that input-bound objects are immutable. Angular detects changes by comparing object references; immutable objects facilitate efficient change detection.

---

## Providers and Dependency Injection

Proper provider configuration ensures efficient dependency management and memory usage.

**Scoped Providers:**

Register services at the component level when they are specific to that component. This practice limits the service's lifecycle to the component, conserving resources.

**Example:**

```typescript
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-specific',
  templateUrl: './specific.component.html',
  providers: [DataService] // Scoped to this component
})
export class SpecificComponent {
  constructor(private dataService: DataService) {}
}
```

**Benefits:**

- **Encapsulation:** Keeps services encapsulated within components that require them.
- **Resource Management:** Frees up memory when the component is destroyed.

**Avoid Overusing Root Providers:**

Providing services in the root injector (`providedIn: 'root'`) makes them singleton and available application-wide. While convenient, overusing root providers can lead to increased memory consumption.

**Best Practice:**

- Scope services appropriately to prevent unnecessary global instances.

---

## SCSS Scoping

Scoping styles effectively prevents unintended global CSS conflicts and ensures that styles apply only to the intended components.

**ViewEncapsulation:**

Angular's `ViewEncapsulation` determines how styles are applied to components.

**Modes:**

- **Emulated (default):** Styles are scoped to the component using unique attributes.
- **None:** Styles are global and not scoped.
- **ShadowDom:** Uses the browser's native Shadow DOM for style encapsulation.

**Example:**

```typescript
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-styled',
  templateUrl: './styled.component.html',
  styleUrls: ['./styled.component.scss'],
  encapsulation: ViewEncapsulation.Emulated // Default behavior
})
export class StyledComponent {}
```

**Best Practices:**

- **Use Emulated Encapsulation:** Provides style encapsulation without requiring Shadow DOM support.
- **Avoid Global Styles:** Limit the use of global styles to prevent unintended overrides.
- **Leverage SCSS Features:** Utilize SCSS features like variables and mixins to maintain consistent styling across components.

---

## Latest Input, Output, and Model Syntax

Angular 19 introduces new functions for defining inputs, outputs, and models, enhancing type safety and reducing boilerplate.

**Inputs:**

Must use the `input()` function to define component inputs with type safety.

**Example:**

```typescript
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>{{ data().title }}</p>`,
})
export class ChildComponent {
  data = input<{ title: string }>();
}
```

**Outputs:**

Must use the `output()` function to define event emitters.

**Example:**

```typescript
import { Component, output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<button (click)="notifyParent()">Click Me</button>`,
})
export class ChildComponent {
  readonly clicked = output<void>();

  notifyParent() {
    this.clicked.emit();
  }
}
```

**Model Inputs:**

Must use the `model()` function for two-way data binding between parent and child components.

**Example:**

```typescript
import { Component, model } from '@angular/core';

@Component({
  selector: 'app-toggle',
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

## Signals over Observables

Angular 19 emphasizes the use of **Signals** for state management due to their simplicity and efficiency. While **Observables** are powerful for handling asynchronous streams, **Signals** offer a more straightforward approach for reactive state without the overhead of subscriptions. 

To enhance your Angular applications with advanced techniques, it's essential to understand **Component Injection**, **Lazy Loading Components**, and **Provider Functions**. Below is an overview of these concepts, along with practical examples to illustrate their implementation.

---

## Component Injection

Component Injection involves dynamically creating and inserting components into the application at runtime. This approach is beneficial for building flexible and modular user interfaces.

**Example:**

```typescript
import { Component, ViewContainerRef, Injector } from '@angular/core';
import { createComponent } from '@angular/core';

@Component({
  selector: 'app-dynamic-loader',
  template: `<ng-container #container></ng-container>`,
})
export class DynamicLoaderComponent {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private injector: Injector
  ) {}

  async loadComponent() {
    this.viewContainerRef.clear();
    const { DynamicComponent } = await import('./dynamic.component');
    const componentRef = createComponent(DynamicComponent, {
      environmentInjector: this.viewContainerRef.injector,
    });
    this.viewContainerRef.insert(componentRef.hostView);
  }
}
```

In this example, the `loadComponent` method dynamically imports and loads the `DynamicComponent` into the view. This pattern promotes modularity and can improve load times by deferring component loading until necessary.

---

## Lazy Loading Components

Lazy loading is a technique that delays the initialization of components until they are required, reducing the initial load time of the application. Angular facilitates lazy loading through dynamic imports and the `loadComponent` function.

**Example:**

```typescript
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'feature',
    loadComponent: () =>
      import('./feature.component').then((m) => m.FeatureComponent),
  },
];
```

In this configuration, the `FeatureComponent` is loaded only when the user navigates to the `/feature` route, optimizing resource utilization and enhancing performance.

---

## Provider Functions

Provider functions in Angular define how dependencies are created. They can be configured using various options such as `useClass`, `useExisting`, `useFactory`, and `useValue`.

**Factory Providers (`useFactory`):**

Factory providers allow for the creation of dependencies using factory functions, offering flexibility in dependency instantiation.

**Example:**

```typescript
import { Injectable } from '@angular/core';

export function loggerFactory() {
  return new Logger('AppLogger');
}

@Injectable({
  providedIn: 'root',
  useFactory: loggerFactory,
})
export class Logger {
  constructor(private name: string) {}

  log(message: string) {
    console.log(`[${this.name}] ${message}`);
  }
}
```
