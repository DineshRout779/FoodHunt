import React from 'react';
import ReactDOM from 'react-dom/client';

//  React Element
const heading = React.createElement(
  'h1',
  { id: 'heading' },
  'Hello from React!'
);

// JSX Element
const Slogan = <p>Taught by Akshay Saini</p>;

// React component(class or functional) - that returns a JSX Element
const App = () => {
  return (
    <>
      <h1>Namaste React 🚀</h1>
      {Slogan}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
