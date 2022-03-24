import React from 'react';
import "./Product.css";


const Product = (props) => {
    //console.log(props.product);
    const {addToHandleCart} =props.product
    const {name, img ,price, seller ,ratings}= props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='product-name'>{name}</p>
           <div className="product-info">
           <p>Price: ${price}</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>Ratings: {ratings}</small></p>
           </div>
           <button onClick={()=> props.addToHandleCart(props.product)} className='btn-cart'>
               <p>Add To Cart</p>
           </button>
        </div>
    );
};

export default Product;