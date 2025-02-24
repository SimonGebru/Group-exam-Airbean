import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.scss";
import closeIcon from "../assets/close.png";

function Nav() {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
        
        <div className={`nav-container ${isVisible ? "fade-in" : ""}`}>
            {/* Stäng-knapp*/}
            <img className="close-icon"
            src={closeIcon} 
            alt="Stäng nav sidan" 
            onClick={() => navigate(-1)} />
             <nav className="nav-links">
                <p onClick={() => navigate("/menu")}>Meny</p>
                <p onClick={() => navigate("/about")}>Vårt Kaffe</p>
                <p onClick={() => navigate("/status")}>Orderstatus</p>
            </nav>
        </div>
         </> 
    );
}

export default Nav;