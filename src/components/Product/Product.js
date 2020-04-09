import React from 'react';
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
            </div>

        </div>
    );
};

export default Product;