import React, { useState, useEffect } from 'react';

import './Animation.css';

function Animation() {
  // Global constants
  const fieldWidth = 700;
  const fieldHeight = 400;
  const diameter = 100;
  const maxLeft = fieldWidth - diameter - 2;
  const maxTop = fieldHeight - diameter - 2;
  const vx = 5;
  const vy = 5;
  const RotateDecrementRate = 0.04;

  // Ball and field images
  const imagesball = [
    './Animation-img/none.png',
    './Animation-img/basketball.png',
    './Animation-img/football.png',
    './Animation-img/volleyball.png',
    './Animation-img/human.jpg',
    './Animation-img/cartoon.jpg',
    './Animation-img/Logo.png',
  ];

  const imagesfield = [
    './Animation-img/field.png',
    './Animation-img/basketball-f.png',
    './Animation-img/football-f.png',
    './Animation-img/volleyball-f.jpeg',
    './Animation-img/human-f.jpg',
    './Animation-img/cartoon-f.jpg',
    './Animation-img/logo-f.jpg',
  ];

  // Global states
  const [running, setRunning] = useState(false);
  const [goRight, setGoRight] = useState(true);
  const [goDown, setGoDown] = useState(true);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [rotateIncrement, setRotateIncrement] = useState(2);
  const [rotateDirection, setRotateDirection] = useState(1);
  const [ballImage, setBallImage] = useState(imagesball[0]);
  const [fieldImage, setFieldImage] = useState(imagesfield[0]);

  // Handle the click event for starting/stopping the ball
  const runClick = () => setRunning(!running);

  // Calculate the ball's position and rotation
  const calculatePosition = () => {
    let newX = x;
    let newY = y;
    let newGoRight = goRight;
    let newGoDown = goDown;
    let newRotate = rotate;
    let newRotateIncrement = rotateIncrement;
    let newRotateDirection = rotateDirection;

    if (newGoRight) {
      newX += vx;
      if (newX >= maxLeft) {
        newGoRight = false;
        newRotateDirection *= -1;
        newRotateIncrement += 2;
      }
    } else {
      newX -= vx;
      if (newX <= 0) {
        newGoRight = true;
        newRotateDirection *= -1;
        newRotateIncrement += 2;
      }
    }

    if (newGoDown) {
      newY += vy;
      if (newY >= maxTop) {
        newGoDown = false;
        newRotateDirection *= -1;
        newRotateIncrement += 2;
      }
    } else {
      newY -= vy;
      if (newY <= 0) {
        newGoDown = true;
        newRotateDirection *= -1;
        newRotateIncrement += 2;
      }
    }

    if (newRotateIncrement > 2) {
      newRotateIncrement -= RotateDecrementRate;
    }

    newRotate += newRotateIncrement * newRotateDirection;
    
    setGoDown(newGoDown);
    setGoRight(newGoRight);
    setX(newX);
    setY(newY);
    setRotate(newRotate);
    setRotateIncrement(newRotateIncrement);
    setRotateDirection(newRotateDirection);
  };

  // Run the animation at an interval
  useEffect(() => {
    const interval = setInterval(() => {
      if (running) {
        calculatePosition();
      }
    }, 25);

    return () => clearInterval(interval);
  }, [running, x, y, rotate, rotateIncrement, rotateDirection]);

  // Change ball and field images
  const changeImage = (ballIndex, fieldIndex) => {
    setBallImage(imagesball[ballIndex]);
    setFieldImage(imagesfield[fieldIndex]);
  };

   // Keyboard event listener
   useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case '0':
          changeImage(0, 0); // None
          break;
        case '1':
          changeImage(1, 1); // Basketball
          break;
        case '2':
          changeImage(2, 2); // Football
          break;
        case '3':
          changeImage(3, 3); // Volleyball
          break;
        case '4':
          changeImage(4, 4); // Human
          break;
        case '5':
          changeImage(5, 5); // Cartoon
          break;
        case '6':
          changeImage(6, 6); // Logo
          break;
        case ' ':
          runClick(); // Spacebar: RUN/STOP
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div id="container">
      <div id="field" style={{
        position: 'relative',
        height: fieldHeight + 'px',
        width: fieldWidth + 'px',
        backgroundImage: `url(${fieldImage})`,
        backgroundSize: 'cover',
      }}>
        <div id="ball" style={{
          position: 'absolute',
          height: diameter + 'px',
          width: diameter + 'px',
          backgroundImage: `url(${ballImage})`,
          backgroundSize: 'cover',
          left: x + 'px',
          top: y + 'px',
          transform: `rotate(${rotate}deg)`,
        }}></div>
      </div>

      <div id="control">
        <button id="run" className={`btn ${running ? 'btn-danger' : 'btn-success'}`} onClick={runClick}>
          {running ? (
            <span className="bi bi-pause-circle-fill">&nbsp;STOP</span>
          ) : (
            <span className="bi bi-play-circle-fill">&nbsp;RUN</span>
          )}
        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <button className="btn btn-primary" onClick={() => changeImage(0, 0)}>None</button>
        <button className="btn btn-primary" onClick={() => changeImage(1, 1)}>Basketball</button>
        <button className="btn btn-primary" onClick={() => changeImage(2, 2)}>Football</button>
        <button className="btn btn-primary" onClick={() => changeImage(3, 3)}>Volleyball</button>
        <button className="btn btn-primary" onClick={() => changeImage(4, 4)}>Human</button>
        <button className="btn btn-primary" onClick={() => changeImage(5, 5)}>Cartoon</button>
        <button className="btn btn-primary" onClick={() => changeImage(6, 6)}>Logo</button>
      </div>
    </div>
  );
};


export default Animation;