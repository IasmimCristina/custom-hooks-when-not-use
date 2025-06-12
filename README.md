# Application with a hands on example of how to avoid custom hooks problems

![custom_hooks](https://github.com/user-attachments/assets/a45d9398-f296-4c53-8508-f32a6cf35f3e)



## Application

1. It's a cats list app with an option of adding new cats saved in local storage. There's also a toggle for dark and light mode.
2. This repository envisions to show how to deal with unwished and problematic re-renders in a React application. Those tips should not be used always since memoization might also harm your app. Use it wisely and read the blog post for more information.

- Read my blog post here: [Custom Hooks possible issues: how to avoid them](https://blog.codeminer42.com/custom-hooks-problems/)
- The deployed version here: [Deployed version](https://custom-hooks-when-not-use.vercel.app/
)
### Branches features

1.  `feat/cat-app-not-using-use-ref:` two cat lists that share context. The first list always add two cats every render. (Not using useRef.) [With context]

1.2  `feat/cat-app-with-use-ref:` two cat lists that share context. The first list always add two cats every render. [With context] (Using ref)

2.  `feat/cats-list-no-context:` application without `useContext` for cats list.

3. `feat/initial-console-logs:` application with modal and toggle theme with console.logs before any memoization or refactor to decrease re-renders. 

3.1  `feat/modal-wrapper:` application with modal wrapper to prevent some unnecessary re-renders.

3.2  `feat/theme-toggle-button:` application with a theme toggle button component to prevent the re-render of our Header component.

4. `feat/react-memo:` version without `useCallback`, but using `React.memo()` and `useMemo`.

5.  `feat/final-version-memoization:` final version with state componentization and memoization.
