import React, { useState } from 'react';

function App() {
  // Function to generate random hex color code
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const [color, setColor] = useState(getRandomColor());

  const changeColor = () => {
    setColor(getRandomColor());
  };

  return (
    <div className="app" style={{backgroundColor: color, height: '100vh', color: '#fff'}}>
      <h1>Random Color Picker</h1>
      <div className="color-box" style={{backgroundColor: '#fff', color: '#000'}}>
        <p>{color}</p>
      </div>
      <button onClick={changeColor}>Generate New Color</button>
    </div>
  );
}

export default App;
