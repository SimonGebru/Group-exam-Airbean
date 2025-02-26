import React from 'react'
import drone from '/src/assets/drone.png'
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Status = () => {
  const location = useLocation();
  let { orderNumber, timeLeft } = location.state || {}; 

  if (!orderNumber || !timeLeft) {
    const savedOrder = JSON.parse(localStorage.getItem('orderDetails'));
    orderNumber = savedOrder.orderNr;
    timeLeft = savedOrder.eta;
  }
  
  /* Button till nav */
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/nav');
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
