import React, { useState, useEffect } from "react";
import HeaderLogo from "../assets/header2.png";
import FooterLogo from "../assets/header3.png";
import "./Menu.scss";
import HamMenu from "../assets/menu.png";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart.jsx";

const Menu = () => {
  const navigate = useNavigate();
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState([]); // kundvagns-state
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

  const addToCart = (item) => {
    let itemId = Math.max(...cart.map(item => item.id), 0) + 1;
    const newItem = { id: itemId, title: item.title, price: item.price}
    console.log("Lägger till i kundvagnen:", newItem);
    setCart((prevCart) => [...prevCart, newItem]);

  };

  const removeFromCart = (id) => {
    console.log("Tar bort från kundvagnen:", id);
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      console.log("Ny kundvagn efter borttagning:", updatedCart);
      return updatedCart;
    });
  };
  if (loading) return <p>Laddar meny...</p>;
  if (error) return <p>Fel: {error}</p>;

  console.log("Meny:", menuItems);
  return (
    <section className="menu-container">
      <section className="menu-header">
        <img src={HeaderLogo} alt="header" className="header" />
        <img src={HamMenu} alt="ham-menu" className="ham-menu" onClick={() => navigate("/nav")} />
      </section>
      <Cart cartItems={cart} removeFromCart={removeFromCart}/>
      <h1 className="menu-title">Meny</h1>
      <ul className="menu-list">
        {menuItems.map((item) => (
          <li key={item.id} className="menu-item">
            <button className="add-button" onClick={() => addToCart(item)}>+</button>
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