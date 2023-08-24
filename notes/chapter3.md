# Chapter 3: Laying the foundation

We can include custom scripts in package.json which we can re-use.

```bash
"scripts": {
    "test": "jest",
    "start": "parcel index.html",
    "build": "parcel build index.html"
}
```

We can now run our app using

```bash
npm start
```

To build the production version

```bash
npm run build
```

## React Element vs React Component

A React element is an object that represents the output you want to see in the UI, and a React component is a function or a class that returns a React element. Components define the structure, behavior, and logic of your application, while elements are the virtual representations of the actual UI rendered on the screen.

We can render UI using both elements and components, but components are better way to build UIs.

## JSX

JSX stands for JavaScript XML.

```jsx
const heading = <h1>This is a heading 🚀</h1>;
```

This above code is not pure JavaScript as it can't be compiled by browser directly.

To convert this code into ECMAScript, we use a transpiler i.e. Babel.

Babel converts our JSX element to React.createElement() which returns a object that is rendered as UI.

A jsx element can be put inside the UI using {}. For example

```js
const slogan = <h2>Jay Hind</h2>;
```

```js
return <div>{slogan}</div>;
```

## Normal function vs React component

- A normal function starts with lowercase letter and it can return anything. But a React Component (functional) starts with a capital letter and it **must** return a JSX element.

- A normal function is called using (), while React component are executed by wrapping the componentinside </>

- A React component is a function but not vice-versa.

Example, a normal js function vs React Component

```js
const add = (a, b) => a + b;
```

```js
const Slogan = () => {
  return <h1>React ⚛ is awesome!</h1>;
};
```
