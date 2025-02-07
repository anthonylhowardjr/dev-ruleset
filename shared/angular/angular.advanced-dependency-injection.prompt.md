# Angular Advanced Dependency Injection Best Practices

**Overview:**  
Angular 19 further emphasizes clean and efficient dependency injection using the new `inject()` function. This document outlines advanced DI techniques—including dynamic component injection, lazy loading of components, provider functions, and the use of injection tokens—while following SOLID principles (especially the Liskov substitution principle).

---

## 1. Using `inject()` Function

**Guideline:**  
Use the new `inject()` function for dependency injection instead of traditional constructor injection. This approach is more type-safe and reduces boilerplate code.

**Example:**

```typescript
import { Component, inject } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-profile',
  template: `<p>User profile works!</p>`,
})
export class ProfileComponent {
  // Instead of using constructor injection:
  // constructor(private userService: UserService) { }
  private userService = inject(UserService);
}
```

---

## 2. Dynamic Component Injection

Dynamic injection improves modularity and performance by creating and inserting components at runtime.

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

---

## 3. Lazy Loading Components

Lazy loading components reduces the initial load time by loading code only when needed. This is especially useful for large or rarely used components.

**Example:**

```typescript
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'feature',
    loadComponent: () => import('./feature.component').then(m => m.FeatureComponent),
  },
];
```

---

## 4. Provider Functions and Injection Tokens

Define dependencies with flexible provider functions using options such as `useClass`, `useExisting`, `useFactory`, and `useValue`. Using lightweight injection tokens can help you provide interfaces and decouple implementations.

**Factory Providers Example:**

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

**Using Injection Tokens for Interfaces:**

```typescript
import { InjectionToken } from '@angular/core';

export interface IDataService {
  getData(): any;
}

export const DATA_SERVICE_TOKEN = new InjectionToken<IDataService>('DATA_SERVICE_TOKEN');

@Injectable({
  providedIn: 'root',
})
export class DataService implements IDataService {
  getData() {
    return 'data from DataService';
  }
}

// In a component:
import { inject } from '@angular/core';

export class SomeComponent {
  private dataService = inject(DATA_SERVICE_TOKEN);
}
```

---

## 5. Applying SOLID Principles in DI

Follow SOLID principles to ensure that your dependency injection is robust and maintainable. 

- **Liskov Substitution Principle:**  
  Ensure that dependencies provided via DI can be easily substituted by other implementations without breaking the application.
- **Interface-Based Programming:**  
  Use injection tokens to provide interfaces rather than concrete implementations. This promotes decoupling and flexibility.
- **Single Responsibility Principle:**  
  Keep your services focused on a single task to ensure they can be easily reused and tested independently.

---

## 6. Reflective Questions

1. **Using `inject()` Function:**  
   How does replacing constructor-based injection with the `inject()` function improve type safety and reduce boilerplate in your Angular components?

2. **Dynamic Injection Benefits:**  
   In what scenarios can dynamic component injection enhance modularity and performance? Can you identify parts of your app that could benefit from lazy, on-demand component loading?

3. **Lazy Loading Advantages:**  
   Which features or components in your application are ideal candidates for lazy loading, and how does this approach improve the initial load time and Core Web Vitals?

4. **Provider Functions & Tokens:**  
   How do provider functions and lightweight injection tokens help in decoupling implementations? Can you provide an example where this makes your code more maintainable?

5. **SOLID Principles in DI:**  
   How do you ensure that your dependency injection follows the Liskov substitution principle and single responsibility principle? What benefits does this bring to your application architecture?
