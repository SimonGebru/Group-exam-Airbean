import './styling/Cart.scss'
import bagIcon from '../assets/bag 2.png'
import React, { useState } from "react";
import { useEffect } from "react";
import ApiCall from './Api.jsx';
import { useNavigate } from "react-router-dom";

const Cart = ({ cartItems, removeFromCart }) => {
  const [isHidden, setIsHidden] = useState(true);
  useEffect(() => {
  }, [cartItems]);

      const cartProductList = cartItems.map(product => ({
     name: product.title,
     price: product.price
   }));

  const checkForDiscount = () => {
    const productTitlesForDiscount = ["Bryggkaffe", "Gustav Adolfsbakelse"];
    const hasDiscount = productTitlesForDiscount.every(title => cartItems.some(item => item.title === title));
    return hasDiscount;
  }

  const calculateTotalPrice = () => {
    const baseTotal = cartItems.reduce((sum, product) => sum + product.price, 0);
    if (checkForDiscount()) {
      return baseTotal - 49 + " kr";
    }
    return baseTotal + " kr";
  };

  const calculateDiscount = () => {
    if (checkForDiscount()) {
      return 49 + " kr";
    }
    return null;
  };

  const totalPrice = calculateTotalPrice();
  const totalDiscount = calculateDiscount();
  
  const navigate = useNavigate();

  const handleCheckout = async () => {
    try {
      const orderDetails = await ApiCall("order", undefined, cartProductList);
      localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
      navigate("/status", { state: { orderNr: orderDetails.orderNr, eta: orderDetails.eta } });
    } catch (error) {
      console.error("Fel vid skapande av order:", error);
    }
  }

  return (
    <>
    <section className="temp-background">
      <div className={`dark-background-overlay ${isHidden ? "hidden" : ""}`}></div>

      <button className="cart-button" onClick={() => setIsHidden(!isHidden)}>
        <img className="bag-icon" src={bagIcon} alt="Cart" />
        <div className="cart-button-notification-icon">
          <p className="notification-number">{cartItems.length}</p>
        </div>
      </button>
<section className={`cart-overlay ${isHidden ? "hidden" : ""}`}>
        <h1 className="cart-header-text">Din beställning</h1>
        <section className="cart-product-container">
          {cartItems.map((product) => (
            <section className="product-example" key={product.id}>
              <p className="product-example-name">{product.title}</p>
              <p className="product-example-price">{product.price} kr</p>
              <button className="product-remove-button" onClick={() => removeFromCart(product.id)}>
                <div className="cross crossOne"></div>
                <div className="cross crossTwo"></div>
              </button>
            </section>
          ))}
        </section>

        <section className="bottom-text-container">
          <p className="cart-total-text">Total </p>
          <p className="cart-dots-divider"> ... </p>
          <p className="cart-price">{totalPrice}</p>
          {totalDiscount && (
              <p className="cart-discount">Rabatt: {totalDiscount}</p>
          )}
          <p className="cart-information">inkl moms + drönarleverans</p>
        </section>

        <button className="checkout-button" onClick={handleCheckout}>
          Take my money!
        </button>
      </section>
    </section>
    </>
  );
};

export default Cart;