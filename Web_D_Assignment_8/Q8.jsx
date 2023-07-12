import React, { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <h2>Count: {count}</h2>
    </div>
  );
}

export default CounterApp;



// In the above code, we import the useState hook from React, which allows us to manage the state within a functional component. We define the count state variable and the setCount function to update the state.

// Inside the CounterApp component, we define two functions: handleIncrement and handleDecrement. These functions update the count state by incrementing or decrementing its value.

// In the JSX portion, we render a heading displaying "Counter App" and two buttons labeled "Increment" and "Decrement". We attach the respective click event handlers to these buttons.

// Lastly, we display the current count value in an h2 element by using the curly braces syntax ({count}) to embed the value dynamically.

// To use this Counter component, you can import and render it in your main React component or app:


import React from 'react';
import CounterApp from './CounterApp';

function App() {
  return (
    <div>
      <CounterApp />
    </div>
  );
}

export default App;



// By rendering the CounterApp component within the App component, the Counter web app will be displayed and you can interact with the buttons to increment and decrement the counter.