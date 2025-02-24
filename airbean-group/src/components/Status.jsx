<<<<<<< HEAD

=======
import React from 'react'
import drone from '/src/assets/drone.png'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Status = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [timeLeft, setTimeLeft] = useState('');
    
 

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/menu');
  }

  return (
    <div className='status-container'>
        <p className="order-number">Ordernummer <strong>#12DV23F</strong></p>
        <img src={drone} alt="" className='img' />
        <h1>Din beställning är på väg!</h1>
        <p> <strong>13</strong> minuter</p>
        <button className='button' onClick={handleButtonClick}>Ok, cool!</button>
    </div>
  )
}

export default Status
>>>>>>> f80831f62f6e5dd2ed4d03a410f2c6868efaee47
