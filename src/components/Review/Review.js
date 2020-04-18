import React, { useState, useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import './Review.css';
import delivaryImage from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);

    const [placeOrder, setPlaceOrder] = useState(false);

    const placeOrderBtn = () => {
        setCart([]);
        setPlaceOrder(true);
        processOrder();

    }

    const removeBtn = (productKey) => {
        console.log('Clicked!!', productKey);
        const newCart = cart.filter(pd => pd.key != productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey)
    }

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);


        const cartProducts = productKeys.map(key => {

            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;

        }, []);
        //console.log(cartProducts);
        setCart(cartProducts);
    }, []);



    let thankyou;

    if (placeOrder) {
        thankyou = <img src={delivaryImage} alt="" />
    }


    return (
        <div className="review-page">

            <div className="review-product">
                <h2 style={{ color: 'orange' }}>Cart History & Details</h2>
                <h3 style={{ color: 'red' }}>Total Cart Items: {cart.length}</h3>
                {
                    cart.map(pd => <ReviewItem
                        key={pd.key}
                        product={pd}
                        removeBtn={removeBtn}
                    >

                    </ReviewItem>)
                }
                       {thankyou}

            </div>

          
            <div>
                <Cart cart={cart}>
                    <button className="add-cart-btn" onClick={placeOrderBtn}>Place Order</button>
                </Cart>

            </div>

        </div>
    );
};

export default Review;