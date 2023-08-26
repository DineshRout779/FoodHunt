# Chapter 8: Let's get classy

_Why api calls are made inside useEffect() or componentDidMount()?_

This practice is used to ensure that API calls are made at specific times during a component's lifecycle to fetch data and perform actions in a controlled manner. Let's explore why this is done:

1. Component Initialization: In class components, the componentDidMount() method is called after the component has been rendered in the DOM. In functional components, the useEffect hook with an empty dependency array achieves a similar effect. This is an appropriate place to initiate API calls since the component is fully ready to interact with the DOM and display data.

2. Avoiding State and Rendering Issues: If you make API calls directly inside the rendering part of your component, it can lead to rendering issues or unnecessary re-renders. Placing API calls in useEffect or componentDidMount() ensures that they are triggered after the initial render, helping to avoid such issues.

3. Single Data Fetch: Placing the API call within useEffect or componentDidMount() helps ensure that the call is made only once when the component is mounted. This prevents multiple, unnecessary API requests when the component re-renders due to state or prop changes.

4. Separation of Concerns: Separating API calls from rendering logic improves code readability and maintainability. It's clearer where data is being fetched, and it's easier to find and modify API-related code when it's concentrated in a specific location.

5. Async Operations: API calls are asynchronous operations, which means they might not return immediately. Placing them inside useEffect or componentDidMount() allows you to handle the asynchronous nature of these calls and manage state updates accordingly.

6. Cleanup: The useEffect hook can also return a cleanup function, which is called when the component is unmounted or when the effect's dependencies change. This is useful for cancelling or cleaning up any ongoing API requests when they are no longer needed.
