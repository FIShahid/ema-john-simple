import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";


const Product = ({product, handleAddToCart}) => {
    //console.log(props.product);
    // const {product, handleAddToCart} =props
    const {name, img ,price, seller ,ratings}= product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='product-name'>{name}</p>
           <div className="product-info">
           <p>Price: ${price}</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>Ratings: {ratings}</small></p>
           </div>
           <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
               <p className='btn-text'>Add To Cart</p>
               <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
           </button>
        </div>
    );
};

export default Product;