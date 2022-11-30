import React, { useEffect, useState } from 'react'

import { add } from '../Store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Store/productSlice';
import { STATUSES } from '../Store/productSlice';

const Product = () => {
    const dispatch = useDispatch();
    const { data : products , status} = useSelector( state => state.product);
    // const [products, setProducts] = useState([]);

    useEffect(() => {

        dispatch(fetchProducts());
        // const fetchProducts = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products')
        //     const data = await res.json();
        //     console.log(data);
        //     setProducts(data);
        // }
        // fetchProducts();
    }, []);

    const handleAdd = (product) => {
        dispatch(add( product ));
    };

    if(status===STATUSES.LOADING){
        return <h2>Wait Loading...</h2>
    }

    if(status===STATUSES.ERROR){
        return <h2>Something Went Wrong!</h2>
    }

    return (
        <div className='productsWrapper'>
            {
                products.map(product => (
                    <div className='card' key={product.id}>
                        <img src={product.image} alt=""></img>
                        <h4>{product.title}</h4>
                        <h4>{product.price}</h4>
                        <button onClick={() => handleAdd(product)} className='btn'>Add To Cart</button>
                    </div>
                ))}
        </div>
    )
}

export default Product