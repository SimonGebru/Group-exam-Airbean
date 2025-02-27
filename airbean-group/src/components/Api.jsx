import React, { useState } from "react";






const ApiCall = async (typeOfCall, orderNumber, orderCart) => {




  


       if (typeOfCall === "menu") {
        try {
            const response = await fetch(`https://airbean-9pcyw.ondigitalocean.app/api/beans`);
            if (!response.ok) {
              throw new Error("Något gick fel vid hämtning av menyn..");
            }
            const data = await response.json();
            
            return data.menu 
          } catch (err) {
            console.error()
          }

       } else if(typeOfCall === "status") {

          try {
            const response = await fetch(`https://airbean-9pcyw.ondigitalocean.app/api/beans/order/status/{${orderNumber}}`);
      
            if (!response.ok) {
              throw new Error('Något gick fel vid hämtning av status..');
            }
      
            const data = await response.json();



      
          } catch (error) {
            console.error('Fel vid hämtning av orderstatus:', error);
          }
        


       } else if(typeOfCall === "order") {

        try {


          const response = await fetch(`https://airbean-9pcyw.ondigitalocean.app/api/beans/order`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
              details: { 
              order: orderCart
            } 
          })
          });



          const data = await response.json();




          if (!response.ok) {
            throw new Error('Något gick fel vid beställning..');
          }

          return data;
      
        } catch (error) {
          console.error('Fel vid beställningsanropet:', error);
        }
      }


        
    
    



}



export default ApiCall;