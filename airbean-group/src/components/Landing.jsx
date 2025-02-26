import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./Landing.scss";
import leftImage from "../assets/Left.png";
import rightImage from "../assets/Right.png";
import middleImage from "../assets/Middle.png";

const Landing = () => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate("/nav"); 
  };

  return (
    <div className="landing" onClick={handleClick}>
      <img src={leftImage} alt="Left leaves" className="leaves left" />
      <img src={middleImage} alt="Air Bean logo" className="logo" />
      <img src={rightImage} alt="Right leaves" className="leaves right" />
    </div>
  );
};

export default Landing;