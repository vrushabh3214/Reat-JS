import { useState, useEffect } from 'react';
import '../App.css';

export default function TrafficLight () {
  const [currentLight, setCurrentLight] = useState('red');

  useEffect(() => {
    const lights = ['red', 'yellow', 'green'];
    let index = 0;

    const intervalId = setInterval(() => {
      index = (index + 1) % lights.length;
      setCurrentLight(lights[index]);
    }, 3000); // Change light every 3 seconds

    return () => clearInterval(intervalId); // Clean up on component unmount
  }, []);

  return (
    <div className="traffic-light">
      <div className={`light red ${currentLight === 'red' ? 'active' : ''}`}></div>
      <div className={`light yellow ${currentLight === 'yellow' ? 'active' : ''}`}></div>
      <div className={`light green ${currentLight === 'green' ? 'active' : ''}`}></div>
    </div>
  );
};