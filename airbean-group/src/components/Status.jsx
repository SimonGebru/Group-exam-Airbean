import React from 'react'
import drone from '/src/assets/drone.png'
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


const Status = () => {
  const location = useLocation();
  const navigate = useNavigate();

  /* Hämta orderdata */
  let orderData = location.state || JSON.parse(localStorage.getItem('orderDetails')) || null;

  /* Om ingen order är lagd */
  if (!orderData) {
    return (
      <div className="status-container">
        <p>Vänligen lägg en beställning först!</p>
        <button className="button" onClick={() => navigate('/menu')}>
          Meny
        </button>
      </div>
    )
  }

  let { orderNr, eta } = orderData;

  /* nuvarande tid + ETA */
  let arrivalTime = orderData.arrivalTime;
  if (!arrivalTime) {
    arrivalTime = Date.now() + eta * 60000;
    orderData.arrivalTime = arrivalTime;
    localStorage.setItem('orderDetails', JSON.stringify(orderData));
  }

  const arrivalDate = new Date(arrivalTime);
  const formattedTime = arrivalDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  if (!orderNr || !eta) {
    const savedOrder = JSON.parse(localStorage.getItem('orderDetails'));
    orderNr = savedOrder.orderNr;
    eta = savedOrder.eta;
  }

  return (
    <div className='status-container'>
      <p className="order-number">Ordernummer <strong>#{orderNr}</strong></p>
      <img src={drone} alt="" className='img' />
      <h1 className='order-text'>Din beställning är på väg!</h1>
      <p className='minutes-left'> Levereras: <strong>{formattedTime}</strong> </p>
      <button className='button' onClick={() => navigate('/nav')}>Ok, cool!</button>
      
    </div>
  )
}

export default Status
