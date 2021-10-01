import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quantity, img, key } = props.product;
    const { handleRemove } = props;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div>
                <h3 className="product-name">{name}</h3>
                <h4>Price: {price}</h4>
                <h4> Quantity: {quantity}</h4>
                <button onClick={() => handleRemove(key)} className="btn-regular">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;