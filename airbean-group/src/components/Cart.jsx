import './Cart.scss'
import bagIcon from '../assets/bag 2.png'
import React, { useState } from "react";
import { useEffect } from "react";




const Cart = () => {




      const [isHidden, setIsHidden] = useState(true); //Ändra till (false) om i dev!!





      const [products, setProducts] = useState([
        {id: 1, title: "Bryggkaffe", price: 49},
        {id: 2, title: "Caffé Doppio", price: 49},
    ]);

    useEffect(() => {
        priceCalculation();
      }, [products]);

    useEffect(() => {
        cartNotificationAmount();
    }, [products])

    


      const addNewProduct = (productTitle, productPrice) => {

        let productId = Math.max(...products.map(product => product.id), 0) + 1; //Extra kod så att inte Id overlap händer.(krockar med removeProduct(); annars.)

        const newProduct = { id: productId, title: productTitle, price: productPrice}

        setProducts(prevProducts => [...prevProducts, newProduct]);

        priceCalculation();
      }

      const removeProduct = (id) => {

        setProducts(prevProducts => prevProducts.filter(product => product.id !== id))

        priceCalculation();

      }


      const [totalPrice, setTotalPrice] = useState("");


      const priceCalculation = () => {
        
        const total = products.map(product => product.price).reduce((partialSum, a) => partialSum + a, 0);

        console.log(total)

        setTotalPrice(`${total} kr`)
      }

      const [notificationAmount, setNotificationAmount] = useState("0")

      const cartNotificationAmount = () => {

        const notfications = products.length

        setNotificationAmount(notfications)

      }




    return (
       <>
       <section className="background-filler">
       <section className='temp-background'>

        <div className={`dark-background-overlay ${isHidden ? "hidden" : ""}`}></div>

        <button className='cart-button' onClick={() => {
            setIsHidden(!isHidden);
            productPrice();
            }}>
            <img className='bag-icon' src={bagIcon}></img>
            <div className='cart-button-notification-icon'>
                <p className='notification-number'>{notificationAmount}</p>
            </div>
        </button>

        <section className={`cart-overlay ${isHidden ? "hidden" : ""}`}>

            

            <div className='cart-icon-pointer'></div>



            <h1 className='cart-header-text'>Din beställning</h1>

            <section className='cart-product-container'>

                {products.map(product => (

                 <section className='product-example' key={product.id}>
                 <p className='product-example-name'>{product.title}</p>
                 <p className='product-example-price'>{product.price} kr</p>
                 <button className='product-remove-button' onClick={() => removeProduct(product.id)}>
                    <div className='cross crossOne'></div>
                    <div className='cross crossTwo'></div>
                 </button>
                 </section>

                ))}



            </section>

            <section className='bottom-text-container'>
                <p className='cart-total-text'>Total </p>
                <p className='cart-dots-divider'> ............................. </p>
                <p className='cart-price'>{totalPrice}</p>
                <p className='cart-information'>inkl moms + drönarleverans</p>

            </section>



            { <button className='checkout-button' onClick={() => addNewProduct("Kaffe Latte", 49)}>Take my money!</button> }


        </section>







       </section>
       </section>

       
       
       </>

    ) 
}


export default Cart