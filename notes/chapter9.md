# Chapter 9: Optimizing our app

This chapter is all about improving the performance of our react application.

Lazy Loading is a technique that can significantly improve the performance of your React application by reducing the initial bundle size and only loading the code that's needed when it's needed. Let's dive into the concepts

## Lazy Loading

Lazy Loading involves deferring the loading of certain parts of your application until they are actually required. This can be particularly useful for larger applications where loading the entire bundle upfront might lead to longer initial load times.

In React, you can use the React.lazy function to lazily load components. This function allows you to import a component dynamically using dynamic import syntax. Here's an example:

```jsx
import React, { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

const App = () => {
  return (
    <div>
      {/* Other components */}
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default App;
```

Parcel does code spliting with zero configuration.
