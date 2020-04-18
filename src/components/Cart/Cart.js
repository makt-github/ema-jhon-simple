import React from 'react';
import './Cart.css';


const Cart = (props) => {

    const cart = props.cart ;
   // console.log(cart);

    //const total = cart.reduce((total,product)=> total + product.price,0);

    let total =0 ;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        total = total + product.price * product.quantity;
        
    }

    let shipping = 0;

    if(total > 100){
        shipping = 0;
    }
    else if(shipping > 50){
        shipping = 6.99;
    }
    else if(total > 0){
        shipping = 13.25;

    }

    //const tax = Math.round(total / 10) ;
    const tax = (total / 10);

    

    const formetNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }


    return (
        <div className="order-summary">
            <h3>Order Summary</h3>
            <p>Item Ordered: {cart.length} </p>
            <p>Product Price:$ {formetNumber(total)}</p>
            <p>Shipping Cost:$ {formetNumber(shipping)}</p>
            <p><small>Tax + VAT:$ {formetNumber(tax)}</small></p>
            <p><span style={{color:'red'}}>Total Price:$</span> {formetNumber(total + shipping + tax)}</p>
            <br/>
            {
                props.children 
            }
        </div>
    );
};

export default Cart;