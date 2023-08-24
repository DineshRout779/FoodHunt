const heading = React.createElement(
  'h1',
  { id: 'heading' },
  'Hello from React!'
);

const child = React.createElement('div', {}, heading);

const parent = React.createElement('div', { id: 'parent' }, [
  child,
  child,
  child,
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
