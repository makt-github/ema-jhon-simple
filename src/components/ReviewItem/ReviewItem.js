import React from 'react';

const ReviewItem = (props) => {

    const { name, quantity, key, img,price,seller,stock } = props.product;

    const reviewItemStyle = {
        borderBottom: '1px solid gray',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '120px',
        textAlign: 'left',
        display: 'flex'
    }
    return (

        <div style={reviewItemStyle}>

            <div className="review-img">
                <img src={img} alt="" />
            </div>

            <div>
                <h4 className="product-name">{name}</h4>
                <p>Quantity: {quantity}</p>
                <p>Price: ${price}</p>
                <p>Sold By: {seller}</p>
                <p>Stock Remaining: {stock}</p>
                <br />
                <button
                    className="add-cart-btn"
                    onClick={() => props.removeBtn(key)}
                >
                    Remove Item
                </button>

            </div>
        </div>
    );
};

export default ReviewItem;