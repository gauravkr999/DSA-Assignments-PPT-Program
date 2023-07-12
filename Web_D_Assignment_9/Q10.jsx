import React, { useState } from 'react';

function Calculator() {
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setResult(result + value);
  };

  const calculate = () => {
    try {
      setResult(eval(result));
    } catch (error) {
      setResult('Error');
    }
  };

  const clear = () => {
    setResult('');
  };

  return (
    <div className="calculator">
      <input type="text" value={result} readOnly />
      <div className="keypad">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => calculate()}>=</button>
        <button onClick={() => clear()}>C</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>
    </div>
  );
}

export default Calculator;





// The Calculator component uses the useState hook to manage the result state. The handleClick function is called when a button is clicked, and it appends the clicked value to the result state. The calculate function evaluates the result using eval and updates the result state. The clear function clears the result state. The JSX code represents the UI of the calculator, with buttons for numbers, operators, and the equal sign.

// To use this calculator component, you would import it into your main application file and include it in the render method or return statement. For example:



import React from 'react';
import Calculator from './Calculator';

function App() {
  return (
    <div className="App">
      <h1>Calculator</h1>
      <Calculator />
    </div>
  );
}

export default App;


To use this calculator component, you would import it into your main application file and include it in the render method or return statement. For example: