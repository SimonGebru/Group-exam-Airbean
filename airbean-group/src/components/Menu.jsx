import React, { useState, useEffect } from "react";
import HeaderLogo from "../assets/header2.png";
import FooterLogo from "../assets/header3.png";
import "./styling/Menu.scss";
import HamMenu from "../assets/menu.png";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart.jsx";
import StickyAd from "./StickyAd.jsx";
import ApiCall from './Api.jsx';

const Menu = () => {
  const navigate = useNavigate();
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState([]); // kundvagns-state
  const [error, setError] = useState(null);
  const [iconStates, setIconStates] = useState({});



  useEffect(() => {
    const fetchMenu = async () => {

       const menuList = await ApiCall("menu", undefined, undefined)
       setMenuItems(menuList)

    };

    fetchMenu();
  }, []);

  

  const addToCart = (item) => {
    let itemId = Math.max(...cart.map(item => item.id), 0) + 1;
    const newItem = { id: itemId, title: item.title, price: item.price}
    setCart((prevCart) => [...prevCart, newItem]);

  setIconStates((prevIcons) => ({
    ...prevIcons,
    [item.id]: "✔",
  }));

  setTimeout(() => {
    setIconStates((prevIcons) => ({
      ...prevIcons,
      [item.id]: "+",
    }));
  }, 1000);
};

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      return updatedCart;
    });
  };

  if (error) return <p>Fel: {error}</p>;

  return (
    <section className="menu-container">
      <section className="menu-header">
        <img src={HeaderLogo} alt="header" className="header" />
        <img src={HamMenu} alt="ham-menu" className="ham-menu" onClick={() => navigate("/nav")} />
      </section>
      <Cart cartItems={cart} removeFromCart={removeFromCart} />
      <StickyAd />
      <h1 className="menu-title">Meny</h1>
      <ul className="menu-list">
        {menuItems.map((item) => (
          <li key={item.id} className="menu-item">
            <button className={`add-button ${iconStates[item.id] === "✔" ? "clicked" : ""}`} onClick={() => addToCart(item)}>
              <span className="icon">{iconStates[item.id] || "+"}</span>
            </button>
            <section className="menu-item-details">
              <span className="menu-item-name">{item.title}</span>
              <span className="menu-item-price">{item.price} kr</span>
              <p className="menu-item-description">{item.desc}</p>
            </section>
          </li>
        ))}
      </ul>
      <img src={FooterLogo} alt="footer" className="footer" />
    </section>
  );
};

export default Menu;