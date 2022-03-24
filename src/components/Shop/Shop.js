import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {

    const [products, setProducts] =useState([])

    const addToHandleCart =(product) =>{
        console.log(product);
    }

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='shop-container'>
            <div className="products-container">
               {
                   products.map(product=><Product
                   
                   key={product.id}
                   product={product}
                   addToHandleCart ={addToHandleCart}
                   ></Product>)
               }
            </div>

            <div className="cart-container">
                <h3>This is Order</h3>
            </div>
        </div>
    );
};

export default Shop;