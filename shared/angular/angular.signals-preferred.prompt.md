# Preferred Use of Signals Over Observables in Angular 19

**Overview:**  
In Angular 19, Signals have become the preferred mechanism for managing reactive state. They offer a more streamlined, efficient, and type-safe approach compared to traditional Observables. This guide explains when and why to use Signals, including input and output signals, computed signals, and linked signals, to manage state and replace traditional lifecycle hooks.

---

## Why Prefer Signals?

- **Simplicity and Efficiency:**  
  Signals provide a straightforward way to manage state with minimal boilerplate. They automatically track dependencies, ensuring that updates are efficient and predictable.

- **Enhanced Type Safety:**  
  Using signals and their associated functions (`input()`, `computed()`, `linkedSignal()`) ensures that state is managed in a type-safe manner, reducing runtime errors.

- **Reduced Subscription Overhead:**  
  Instead of manually subscribing to Observables in templates (which can lead to performance issues and memory leaks), convert Observables to signals using `toSignal()` from the interop package. This approach avoids unnecessary subscriptions and simplifies template bindings.

- **Lifecycle and Reactive Effects:**  
  Replace traditional lifecycle hook logic (like `ngOnInit` and `ngOnChanges`) with reactive effects using `effect()`. This minimizes the need for manual change detection and centralizes state management in a reactive, declarative way.

- **Input and Output Signals:**  
  Use input signals to define component inputs and output signals to define event emitters. This modern approach offers improved type safety and consistency over the traditional `@Input()` and `@Output()` decorators.

---

## Key Guidelines

- **Never Subscribe in Templates:**  
  Do not subscribe to an Observable directly in the template. Instead, convert it to a signal using `toSignal()`.

  **Example:**
  ```typescript
  // Instead of:
  // <div>{{ myObservable | async }}</div>
  
  // Use:
  import { toSignal } from '@angular/core/rxjs-interop';
  const mySignal = toSignal(myObservable);
  // Then in the template: {{ mySignal() }}
  ```

- **Use Signals for State Management:**  
  Utilize `signal()` for mutable state, `computed()` for derived state, and `linkedSignal()` when you need to create signals that maintain a dependency on other signals.

- **Replace Lifecycle Hooks with Effects:**  
  When possible, use `effect()` to handle side effects rather than relying on traditional lifecycle hooks. This ensures that state changes are managed reactively.

- **Adopt Input and Output Signals:**  
  Replace traditional decorators with signal-based equivalents:
  - **Input Signals:** Use `input()` to define component inputs with type safety.
  - **Output Signals:** Use `output()` to define event emitters.

---

## Example: Managing State with Signals in a Standalone Component

### Component Code: `angular.signals-preferred.component.ts`

```typescript
import { Component, ChangeDetectionStrategy, input, computed, signal, effect, toSignal } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-signals-demo',
  standalone: true,
  templateUrl: './angular.signals-preferred.component.html',
  styleUrls: ['./angular.signals-preferred.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalsPreferredComponent {
  // Define a required input signal
  counter = input.required<number>();

  // Simulated Observable stream (for example, data from a service)
  items$: Observable<{ id: number; name: string }[]> = of([
    { id: 1, name: 'Alpha' },
    { id: 2, name: 'Beta' },
    { id: 3, name: 'Gamma' }
  ]);

  // Convert the Observable to a signal for efficient binding in the template.
  items = toSignal(this.items$);

  // Create a computed signal for a derived state (double the counter)
  doubleCounter = computed(() => this.counter() * 2);

  // Set up an effect to log changes whenever the counter updates
  #logCounterChange = effect(() => {
    console.log('Counter updated:', this.counter());
  });

  // Method to update the counter
  incrementCounter() {
    this.counter.set(this.counter() + 1);
  }
}
```

### Template Code: `angular.signals-preferred.component.html`

```html
<div class="signals-demo">
  <!-- Declare a local variable using @let to hold the computed value -->
  @let computedDouble = doubleCounter();

  <p>Counter: {{ counter() }}</p>
  <p>Double (computed): {{ computedDouble }}</p>

  <!-- Button to update the counter -->
  <button (click)="incrementCounter()">Increment Counter</button>

  <!-- Deferred rendering example using @defer (if applicable) -->
  @defer (on viewport; prefetch on idle) {
    <lazy-component />
  } @placeholder {
    <p>Loading deferred content...</p>
  }

  <!-- Iterative rendering using @for with trackBy for efficient updates -->
  @let itemList = items();
  <ul>
    @for (let item of itemList; track item.id) {
      <li>{{ item.name }}</li>
    }
  </ul>
</div>
```

### SCSS File: `angular.signals-preferred.component.scss`

```scss
.signals-demo {
  padding: 1rem;
  font-family: Arial, sans-serif;

  p {
    margin: 0.5rem 0;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #007acc;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #005fa3;
    }
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      padding: 0.5rem;
      border-bottom: 1px solid #ccc;
    }
  }
}
```

---

## Additional Best Practices for Signals

- **Signals for Reactive State:**  
  Use signals to hold and update state instead of managing subscriptions manually. This reduces complexity and improves performance.
  
- **Computed and Linked Signals:**  
  Use `computed()` for deriving state that depends on other signals and `linkedSignal()` when you need a signal that maintains its value relative to another signal.

- **Replace Lifecycle Hooks:**  
  When possible, replace traditional lifecycle hook logic (e.g., `ngOnInit`, `ngOnChanges`) with reactive effects (`effect()`). This allows your component to respond to state changes automatically.

- **Input and Output Signals:**  
  Use the new signal-based approach for component inputs (`input()`) and outputs (`output()`). This method ensures type safety and more predictable reactivity.

---

## Reflective Questions

1. **Signals vs. Observables:**  
   How do signals simplify state management compared to Observables? What benefits have you seen when converting Observables to signals using `toSignal()`?

2. **Reactive Computations:**  
   How do computed signals and linked signals help you manage derived state more efficiently than manual subscriptions or method calls in templates?

3. **Lifecycle Hooks Replacement:**  
   In what scenarios can you replace traditional lifecycle hooks with reactive effects using `effect()`? How does this improve code clarity and performance?

4. **Input/Output Signals:**  
   What advantages do input and output signals offer over the traditional `@Input()` and `@Output()` decorators? How does this improve type safety and component communication?
