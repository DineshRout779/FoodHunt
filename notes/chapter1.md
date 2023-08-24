# Chapter 1: Inception

- We can write HTML directly in the HTML file or we can also inject HTML into the DOM using JavaScript's DOM APIs.

```js
const heading = document.createElement('h1');
heading.innerHTML = 'Namaste from React!';

const root = document.getElementById('root');
root.appendChild(heading);
```

- We can also do this using React.

## React

A JavaScript library for building user interfaces

- The simplest way of getting started with Reactis using CDN Links.

```js
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
```

### React vs React-DOM

- react
  - Contains core functionalities of React like building UIs.
- react-dom
  - Contains functionalities to render and update the DOM

### Why crossorigin

By using the "crossorigin" attribute, you can control how the browser behaves when loading resources from different origins. It's an important security feature that helps prevent potential cross-site request forgery (CSRF) attacks and other security vulnerabilities.

### DOM Manipulation using React

```js
const heading = React.createElement('h1', {}, 'Hello from React!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
```

React.createElement() returns an Object.

To avoid nesting of creation of React elements, we have JSX.

### JSX

In JSX, you can write components and elements using a syntax that closely resembles HTML, but you are actually writing JavaScript. JSX elements look similar to HTML elements, with tags, attributes, and content:

```js
const element = <h1>Hello, JSX!</h1>;
```
