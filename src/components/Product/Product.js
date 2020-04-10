import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const { img, name, seller, price, stock } = props.product
    return (
        <div className="product">

            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h5 className="product-name">{name}</h5>
                <br />
                <p><small>by: {seller}</small></p>
                <br />
                <p>$ {price}</p>
                <p><small>Only {stock} left in stock -Order Soon</small></p>
                <button className="add-cart-btn" onClick={()=>props.addCartBtn(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>

        </div>
    );
};

export default Product;