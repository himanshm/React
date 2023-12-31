# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# React
When working with react, we in the end, write declarative code, which means we define the target UI state(s) - not the steps to get there! Instead react will figure out & perform necessary steps. DECLARATIVE = DEFINE THE GOAL, NOT THE STEPS. On the other hand, when writing vanilla javascript code, we are writing IMPERATIVE (= DEFINE THE STEPS, NOT THE GOAL) code

### Declarative REACT

```
let content;

if(user.isLoggedIn) {
    content = <button>Continue</button>
} else {
    content = <button>Log In</button>
}

return content;
```

### Imperative Vanilla JAVASCRIPT

```
let btn = document.querySelector('button');

if(user.isLoggedIn) {
    button.textContent = 'Continue';
} else {
    button.textContent = 'Log In'
}

document.body.append(btn)
```
type react.new into your browser URL bar, a brand new React project workspace will be created with codesandbox.io

The JSX/React code doesnt run in the browser. React code => typically uses JSX (HTML in JavaScript). React code must be transformed. Code is transformed and optimised to the code that runs in the browser (JavaScript code without JSX). This is why a "more complex" project setup is needed.


JSX = Javascript synta extension - Used to create & describe HTML elements in JavaScript in a declarative way. With react, we write Declarative code. We define the target HTMl structure & UI - not the steps to get there! React projects come with a build process that transforms JSX code (behind the scenes) to code that does work in the browsers

A react component is jsut a javaScript function which must follow two important rules:
1. The function name must start with Uppercase Character, multi-word names should be written in PascalCase.
2. The function must return a renderable content - a value that can be rendered ("displayed on screen") by react. In Most cases: return JSX