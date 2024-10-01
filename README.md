![custom_hooks](https://github.com/user-attachments/assets/a45d9398-f296-4c53-8508-f32a6cf35f3e)

# Application with a hands on example of how to avoid custom hooks problems

## Application

1. It's a cats list app with an option of adding new cats saved in local storage. There's also a toggle for dark and light mode.
2. This repository envisions to show how to deal with unwished and problematic re-renders in a React application. Those tips should not be used always since memoization might also harm your app. Use it wisely and read the blog post for more information.

- Read my blog post here: [To be added.]
- The deployed version here: [To de added.]

### Branches features

1.  `feat/cat-app-introduction:` two cat lists that share context. The first list always add two cats every render.
2.  `feat/cats-list-no-context:` application without `useContext` for cats list.
3.  `feat/cat-app-inifinite-re-renders:` version without `useCalback`, but using `React.memo()` and `useMemo`.
4.  `feat/chained-hooks:` final version with state componentization and memoization.
