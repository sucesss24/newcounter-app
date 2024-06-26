import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css'; // Import your custom CSS
import imageSrc from './dark.jpg'; // Adjust path as necessary

export default function Todos() {
  const [count, setCount] = useState(0); // Ensure `count` is declared here

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div
      className='d-flex justify-content-center align-items-center counter-container'
      style={{
        height: "100vh",
        backgroundImage: `url(${imageSrc})`,
        backgroundColor:"#000000",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
      <div className="text-center">
        <h1 className="mb-4 display-1 counter-title">COUNTER APP</h1>
        <p className="display-1 mb-5 counter-title">{count}</p>
        
        <div className="d-flex justify-content-center">
          <button className='btn btn-success btn-lg mx-3' onClick={increment} aria-label="Increment">(+) Increment</button>
          <button className='btn btn-success btn-lg mx-3' onClick={decrement} aria-label="Decrement">(-) Decrement</button>
        </div>
      </div>
    </div>
  );
}
