import React, { useState } from 'react';

function MaxNumberApp() {
  // State variables for input numbers and max result
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [maxNumber, setMaxNumber] = useState(null);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Calculate max number
    const max = Math.max(Number(number1), Number(number2));
    setMaxNumber(max);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Max Number Finder</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Number 1:
            <input
              type="number"
              value={number1}
              onChange={(e) => setNumber1(e.target.value)}
              placeholder="Enter first number"
              required
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            Number 2:
            <input
              type="number"
              value={number2}
              onChange={(e) => setNumber2(e.target.value)}
              placeholder="Enter second number"
              required
            />
          </label>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      {maxNumber !== null && (
        <div>
          <h3>Max Number: {maxNumber}</h3>
        </div>
      )}
    </div>
  );
}

export default MaxNumberApp;