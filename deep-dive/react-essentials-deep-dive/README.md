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

`.jsx` is a file extension that's not supported by the browser! It's working because you're working in a React project that supports this special extension. Because this extension "tells" the underlying build process (which is running behind the scenes when the development server is running) that a file contains JSX code (which is also not supported by browsers).

It's important to understand that it's really just that build process that cares about this extension.

And therefore, you'll also find React projects that don't use `.jsx` but instead just .js as a file extension. And in those .js files, you'll also find JSX code. Because it simply depends on the underlying build process which extension is expected when using this JSX syntax in a file.

Since it doesn't work in the browser either way, there is no hard rule regarding this. Instead, you'll find projects that require `.jsx` (like the project setup we use) and you'll find projects that also support .js (with JSX code inside).

We're emphasizing this here so that you're not confused if you encounter React projects that don't use `.jsx` files.

In addition, you'll also find projects that require the file extension as part of file imports (e.g., `import App from './App.jsx'`) and you'll find other projects that don't require this (i.e., there, you could just use `import App from './App'`).

This, again, has nothing to do with the browser or "standard JavaScript" - instead it simply depends on the requirements of the code build process that's part of the project setup you chose.

Static Content: Content that is hardcoded into the JSX code and can't change at runtime. `<h1>Hello World!</h1>`
Dynamic Content: Logic that produces the actual value is added to JSX and content/value is derived at runtime. `<h1>{userName}</h1>`

Interpolation: used to render dynamic content using {}. Only expressions that directly produce a value can be used inside curly braces. If-statements, for-loops, function definitions and other block statements are not allowed.

### Props

Is all about being able to pass data into components, and to then use that data in there. We can set props ("Custom attributes") on components to then extract & use them in the receiving component.

Beyond the various ways of setting and extracting props, there are even more ways of dealing with props.

### Passing a Single Prop Object

If you got data that's already organized as a JavaScript object, you can pass that object as a single prop value instead of splitting it across multiple props.

I.e., instead of

```
<CoreConcept
  title={CORE_CONCEPTS[0].title}
  description={CORE_CONCEPTS[0].description}
  image={CORE_CONCEPTS[0].image} />
```

or

```
<CoreConcept
  {...CORE_CONCEPTS[0]} />
```

you could also pass a single concept (or any name of your choice) prop to the `CoreConcept` component:

```
<CoreConcept
  concept={CORE_CONCEPTS[0]} />
```

In the `CoreConcept` component, you would then get that one single prop:

```
export default function CoreConcept({ concept }) {
  // Use concept.title, concept.description etc.
  // Or destructure the concept object: const { title, description, image } = concept;
}
```

It is entirely up to you which syntax & approach you prefer.

### Grouping Received Props Into a Single Object

You can also pass multiple props to a component and then, in the component function, group them into a single object via JavaScript's "Rest Property" or "Destructuring Assignment" syntax. We can use "Rest properties" to group properties that have not been "pulled out" via destructuring into a new object ("props" in this case). So the "priority" prop could be extracted from the props object as shown.

```
<MyComponent priority={5} />

function MyComponent({...props}) {
    return <p>Priority: {props.priority}</p>
}
```

I.e., if a component is used like this:

```
<CoreConcept
  title={CORE_CONCEPTS[0].title}
  description={CORE_CONCEPTS[0].description}
  image={CORE_CONCEPTS[0].image} />
```

You could group the received props into a single object like this:

```
export default function CoreConcept({ ...concept }) {
  // ...concept groups multiple values into a single object
  // Use concept.title, concept.description etc.
  // Or destructure the concept object: const { title, description, image } = concept;
}
```

If that syntax is a bit confusing - worry not! You'll also see concrete examples for this syntax (and for why you might want to use it in certain situations).

### Default Prop Values

Sometimes, you'll build components that may receive an optional prop. For example, a custom Button component may receive a type prop.

So the Button component should be usable either with a type being set:

```
<Button type="submit" caption="My Button" />
```

Or without it:

```
<Button caption="My Button" />
```

To make this component work, you might want to set a default value for the type prop - in case it's not passed.

This can easily be achieved since JavaScript supports default values when using object destructuring:

```
export default function Button({ caption, type = "submit" }) {
  // caption has no default value, type has a default value of "submit"
}
```

### Component Composition

The way of building components where components can wrap other Components or other content is called component compositon.

```
export default function TabButton(props) {
    return (
        <li><button>{props.children}</button></li>
    )
}
```

```
<menu>
    <TabButton>Components</TabButton>
</menu>

```
### State
We cannot use a regular variable for updating the UI because the component function does not execute again. Instead, we need a way of telling react that we want to update the UI. State concept is all about registering variables, that are handled by React and that are updated with help of a function that's provided by React, that will also tell React that data changed and that will therefore cause React to update the UI.