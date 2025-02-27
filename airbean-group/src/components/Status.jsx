import React from 'react'
import drone from '/src/assets/drone.png'
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


const Status = () => {
  const location = useLocation();
  let { orderNumber, timeLeft:initialTimeLeft } = location.state || {}; 
  let [timeLeft, setTimeLeft] = useState(initialTimeLeft);

  /* Button till nav */
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/nav');
  }

    /* setInterval för timer */
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 5000);
    console.log(timer)

    // Rensa intervallet vid unmount
    return () => clearInterval(timer);
  }, [timeLeft]);

  const initialOrder = location.state || null;
  if (!initialOrder) {
    return (
      <div className="status-container">
        <p>Vänligen lägg en beställning först.</p>
        <button className="button" onClick={() => navigate('/menu')}>
          Meny
        </button>
      </div>
    );
  }

  if (!orderNumber || !timeLeft) {
    const savedOrder = JSON.parse(localStorage.getItem('orderDetails'));
    orderNumber = savedOrder.orderNr;
    timeLeft = savedOrder.eta;
  }

  return (
    <div className='status-container'>
      <p className="order-number">Ordernummer <strong>#{orderNumber}</strong></p>
      <img src={drone} alt="" className='img' />
      <h1 className='order-text'>Din beställning är på väg!</h1>
      <p className='minutes-left'> <strong>{timeLeft}</strong> minuter</p>
      <button className='button' onClick={handleButtonClick}>Ok, cool!</button>
    </div>
  )
}

export default Status
