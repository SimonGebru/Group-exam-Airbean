import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import HeaderLogo from "../assets/header2.png";
import FooterLogo from "../assets/header3.png";
import HamMenu from "../assets/menu.png";
import CartIcon from "../assets/bag 2.png";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("https://airbean-9pcyw.ondigitalocean.app/api/beans");
        if (!response.ok) {
          throw new Error("Något gick fel vid hämtning av menyn");
        }
        const data = await response.json();
        setMenuItems(data.menu); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };


  if (loading) return <p>Laddar meny...</p>;
  if (error) return <p>Fel: {error}</p>;

  return (
    <div className="menu-container">
      <div className="menu-header">
        <img src={HeaderLogo} alt="header" className="header" />
        <img src={HamMenu} alt="ham-menu" className="ham-menu" />
        <div className="cart-icon-container">
          <img src={CartIcon} alt="cart-icon" className="cart-icon" />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </div>
      </div>
      <h1 className="menu-title">Meny</h1>
      <ul className="menu-list">
        {menuItems.map((item) => (
          <li key={item.id} className="menu-item">
            <button className="add-button" onClick={addToCart}>
              <FaPlus />
            </button>
            <div className="menu-item-details">
              <span className="menu-item-name">{item.title}</span>
              <span className="menu-item-price">{item.price} kr</span>
              <p className="menu-item-description">{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
      <img src={FooterLogo} alt="footer" className="footer" />
    </div>
  );
};

export default Menu;