import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../Store/cartSlice';


const Cart = () => {

      const dispatch=useDispatch();

  const products = useSelector(state => state.cart);

    const handleRemove = (productId) => {
           dispatch(remove(productId))
    }

  return (
    <div>
      <h3>Cart</h3>
      <div className='cartWrapper'>
        {
          products.map(product => (
            <div className='cartCard' >
              <img src={product.image} alt="" />
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <buttton onClick={() => handleRemove(product.id)} className='btn'>Remove</buttton>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Cart