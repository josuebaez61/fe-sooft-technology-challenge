# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

---

## Project Architecture

### Atomic Design

This project follows the [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) methodology for organizing UI components. The structure is divided into:

- **Atoms:** Basic building blocks (e.g., Button, Input, Text).
- **Molecules:** Combinations of atoms that form more complex components (e.g., FormField, QuoteCard).
- **Organisms:** Groups of molecules and atoms that form distinct sections of the UI (e.g., QuoteList, AppHeader).
- **Templates:** Page-level layouts that arrange organisms and provide structure.
- **Pages:** Specific views composed of templates and organisms.

This approach improves reusability, scalability, and maintainability of the UI.

### Unit Testing with Jest

Unit tests are written using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).  
Key points:

- Test files are placed alongside components or in the `test` directory.
- Use `@testing-library/react` for rendering components and simulating user interactions.
- Use `@testing-library/jest-dom` for extended DOM assertions.
- Mock dependencies (like Redux store or child components) as needed for isolation.
- Run tests with `npm test` or `jest`.

Example test:

```tsx
import { render, screen } from "@testing-library/react";
import Button from "../src/components/Atoms/Button";

test("renders button with text", () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText("Click me")).toBeInTheDocument();
});
```

### Redux State Management

This project uses [Redux Toolkit](https://redux-toolkit.js.org/) for state management, following best practices for scalable React applications.

- **Store Setup:**  
  The Redux store is configured in `src/lib/redux/store.ts` using `configureStore`.  
  Slices for each domain (e.g., `quotes`, `globalLoading`) are combined in the store.

- **Slices:**  
  Each feature/domain has its own slice (e.g., `quotesSlice`) defined with `createSlice`, containing state, reducers, and handling async actions via `extraReducers`.

- **Async Logic:**  
  Asynchronous operations (such as fetching or creating quotes) are handled using `createAsyncThunk` in the `quotesThunks.ts` file.  
  These thunks dispatch actions for loading, success, and error states.

- **Hooks:**  
  Typed hooks (`useAppDispatch`, `useAppSelector`) are provided in `src/lib/redux/hooks.ts` for type-safe access to the store and dispatch.

- **Usage Example:**

  ```tsx
  import { useAppDispatch, useAppSelector } from "../lib/redux/hooks";
  import { fetchQuotes } from "../lib/redux/quotes/quotesThunks";

  function MyComponent() {
    const dispatch = useAppDispatch();
    const quotes = useAppSelector((state) => state.quotes.quotes);

    useEffect(() => {
      dispatch(fetchQuotes({}));
    }, [dispatch]);

    // ...
  }
  ```

- **Actions:**  
  Actions are defined using `createAction` and exported from files like `quotesActions.ts` for use in components and thunks.

This structure keeps state logic centralized, predictable, and easy to test.

---

### Static Classes for Services

Service logic (such as API or Firebase interactions) is encapsulated in static classes (e.g., `QuotesService`).  
Benefits:

- No need to instantiate service classes.
- All methods are called directly as `QuotesService.methodName()`.
- Centralizes business logic and data access, keeping components clean.

Example:

```ts
export class QuotesService {
  static async getQuotes(): Promise<Quote[]> {
    // ...fetch logic...
  }
}
```

Usage:

```ts
const quotes = await QuotesService.getQuotes();
```
