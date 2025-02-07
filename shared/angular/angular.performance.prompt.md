# Angular Performance Best Practices with Signals, Defer, and Optimal Template Strategies

**Task:**  
Generate a standalone Angular component that demonstrates advanced performance optimizations using Angular 19 features. The component must:

- Be a standalone component using OnPush change detection.
- Leverage Angular Signals for reactive state management.
- Utilize the latest Angular control flow syntax: `@let`, `@if`, `@for`, and especially `@defer` with its sub-blocks.
- Avoid calling methods directly in the template by pre-computing values.
- Include advanced deferred loading strategies to reduce the initial bundle size and improve Core Web Vitals.
- Demonstrate techniques for skipping component subtrees and optimizing slow computations.

## Important Notes

- Beware of effect effect() pitfalls:
  - Performance Overhead
  - Unnecessary Re-evaluations
  - Potential for Infinite Loops
- Always push-back on anything that degrades performance.
- Warn if the user is not following best practices.
- Warn if the user is making the code more complex without a good reason.
- Always suggest the best possible code based on performance best practices.

---

## Requirements:

1. **Standalone Component & OnPush Strategy:**  
   - Mark the component as standalone.
   - Use `ChangeDetectionStrategy.OnPush` to limit change detection to only when inputs change or events occur.

2. **Reactive State with Signals:**  
   - Use `input()`, `computed()`, and `toSignal()` to manage state.
   - Favor signals over Observables or inline method calls to reduce computational overhead.

3. **Latest Control Flow Syntax:**  
   - Use `@let` to declare local template variables.
   - Use `@if` for conditional rendering.
   - Use `@for` for iteration with a trackBy function.
   - **Deferred Loading with `@defer`:**
     - Wrap non-critical UI parts in a `@defer` block.
     - Use sub-blocks like `@placeholder`, `@loading`, and `@error` for managing deferred states.
     - Configure triggers such as `on viewport`, `on interaction`, `on timer`, etc.
     - Optionally combine triggers with prefetch (e.g., `(on interaction; prefetch on idle)`).

4. **Skipping Component Subtrees:**  
   - Use OnPush to skip change detection for component subtrees that are not affected by state changes.
   - Ensure that if a component subtree’s inputs remain unchanged, Angular will bypass its change detection, reducing unnecessary computation.

5. **Avoid Calling Methods in Templates:**  
   - Compute values in the component (via signals or computed properties) instead of calling functions directly in the template.

6. **Optimized Binding & Template Cleanliness:**  
   - Use Angular’s binding syntax (interpolation, property binding, event binding) with simple expressions.
   - Move complex logic to the component class or services.

7. **Optimizing Slow Computations:**  
   - Identify heavy computations using Angular DevTools’ profiler.
   - Optimize underlying algorithms where possible.
   - Use pure pipes or memoization to cache heavy computations.
   - Avoid repaints or layout reflows in lifecycle hooks that run on each change detection cycle.

---

## Detailed Explanation of Key Features

### Deferred Loading with `@defer`

Deferrable views (or `@defer` blocks) reduce the initial bundle size by deferring the loading of components, directives, pipes, and CSS styles that are not required for the initial render. When a `@defer` block is encountered, Angular splits its dependencies into a separate JavaScript file that is only loaded once a trigger condition is met.

**Sub-Blocks:**

- **@placeholder:**  
  Content to display before deferred content loads. You can optionally set a minimum display time to avoid flicker.
  
- **@loading:**  
  Content to show while the deferred block is loading (supports `after` and `minimum` parameters).

- **@error:**  
  Content to display if deferred loading fails.

**Triggers:**

- **idle:** Loads when the browser is idle (default).
- **viewport:** Loads when the element enters the viewport.
- **interaction/hover:** Loads when the user interacts or hovers over the placeholder.
- **immediate/timer:** Loads immediately after rendering or after a set time.
- **when:** Loads when a custom condition becomes truthy.
- **Prefetch:** Use prefetch triggers (e.g., `prefetch on idle`) to load resources ahead of time.

*Reference: [Angular Defer Guide](https://angular.dev/guide/templates/defer)*

### Skipping Component Subtrees

Angular’s default change detection traverses the entire component tree, which can become a performance issue in large apps. By configuring components with OnPush:

- Change detection runs only when input references change or events occur.
- Subtrees that do not receive new inputs can be skipped entirely, reducing processing time.
- However, if an event occurs within a subtree, change detection may run on that subtree—even if its parent uses OnPush.

**Best Practice:**  
Ensure that mutable objects passed as inputs are replaced with new references when changes occur. For non-changing sections of the UI, using OnPush can effectively skip unneeded change detection cycles.

### Optimizing Slow Computations

During each change detection cycle, Angular evaluates all template expressions and lifecycle hooks. Slow computations can degrade performance:

- **Identify Bottlenecks:**  
  Use Angular DevTools’ profiler to spot components that take excessive time during change detection.
- **Techniques to Optimize:**
  - **Algorithm Optimization:** Refactor heavy computations to be more efficient.
  - **Pure Pipes:** Use pure pipes to cache computations; they only re-run when inputs change.
  - **Memoization:** Cache the results of expensive function calls, preserving computed results.
  - **Avoid Reflows:** Minimize DOM reads/writes inside lifecycle hooks to reduce layout recalculations.

---

## Example Output

### Component Code: `performance-demo.component.ts`

```typescript
import { Component, ChangeDetectionStrategy, input, computed, toSignal } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-performance-demo',
  standalone: true,
  templateUrl: './performance-demo.component.html',
  styleUrls: ['./performance-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PerformanceDemoComponent {
  // Reactive input using signal-based input function.
  counter = input.required<number>();

  // Example Observable stream (e.g., from a service)
  items$: Observable<{ id: number; name: string }[]> = of([
    { id: 1, name: 'Alpha' },
    { id: 2, name: 'Beta' },
    { id: 3, name: 'Gamma' }
  ]);

  // Convert Observable to a Signal for direct binding.
  items = toSignal(this.items$);

  // Computed signal based on counter
  doubleCounter = computed(() => this.counter() * 2);

  constructor() {
    // Set initial counter value.
    this.counter.set(5);
  }
}
```

### Template Code: `performance-demo.component.html`

```html
<div class="performance-demo">
  <!-- Local variable declaration using @let -->
  @let computedDouble = doubleCounter();

  <p>Counter: {{ counter() }}</p>
  <p>Double (computed): {{ computedDouble }}</p>

  <!-- Conditional rendering using @if -->
  @if (counter() > 0) {
    <p>Counter is positive.</p>
  } @else {
    <p>Counter is zero or negative.</p>
  }

  <!-- Deferred rendering with @defer, using multiple sub-blocks and triggers -->
  @defer (on viewport; prefetch on idle) {
    <!-- Deferred content: large component loaded only when it enters the viewport -->
    <large-component />
  } @placeholder (minimum 500ms) {
    <p>Loading large component...</p>
  } @loading (after 100ms; minimum 1s) {
    <img alt="Loading..." src="loading.gif" />
  } @error {
    <p>Failed to load component.</p>
  }

  <!-- Iterative rendering using @for with a trackBy function -->
  @let itemList = items();
  <ul>
    @for (let item of itemList; track item.id) {
      <li>{{ item.name }}</li>
    }
  </ul>
</div>
```

### SCSS File: `performance-demo.component.scss`

```scss
.performance-demo {
  padding: 1rem;
  font-family: Arial, sans-serif;

  p {
    margin: 0.5rem 0;
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

## Additional Guidelines:

- **Deferred Loading (`@defer`):**  
  Use `@defer` blocks to split non-critical dependencies (components, directives, pipes, and CSS) into separate bundles, loaded on demand. This improves initial load times and Core Web Vitals such as LCP and TTFB.

- **Sub-Blocks & Triggers:**  
  Configure `@placeholder`, `@loading`, and `@error` sub-blocks to manage the UI during deferred loading. Select appropriate triggers (e.g., viewport, interaction, timer) to control when deferred content is loaded.

- **Skipping Component Subtrees:**  
  By using OnPush change detection, Angular can skip entire component subtrees that have not received new inputs. This minimizes unnecessary change detection cycles.

- **Optimizing Slow Computations:**  
  Identify heavy computations with Angular DevTools’ profiler. Optimize these computations by refactoring algorithms, using pure pipes, applying memoization, and avoiding costly DOM operations in lifecycle hooks.

- **Template Simplicity:**  
  Avoid embedding complex logic in the template. Pre-compute values in the component (using Signals or computed properties) and bind those values directly.

- **Efficient Binding:**  
  Use Angular’s binding syntax for straightforward expressions. Keep templates clean and focused on displaying data.

---

## Reflective Questions:

1. **Deferred Rendering:**  
   How does using `@defer` with specific triggers (e.g., viewport and prefetch on idle) reduce your application's initial bundle size and improve user experience? Which parts of your UI should be deferred to prevent layout shifts?

2. **Skipping Change Detection:**  
   How can OnPush change detection be strategically used to skip checking subtrees that are not affected by state changes? Can you identify parts of your component tree that are ideal candidates for this approach?

3. **State Computation:**  
   In your current projects, how would converting Observables to Signals (via `toSignal`) and computing values in the component improve performance compared to direct method calls in the template?

4. **Optimizing Computations:**  
   What techniques (pure pipes, memoization) have you used or could use to optimize slow computations during change detection cycles?

5. **Template Cleanliness:**  
   How can you further simplify your Angular templates by moving complex logic to the component class, and what benefits would that bring to overall performance and maintainability?
