import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import store from '../utils/store'
import FoodItems from './FoodItems';
import { clearCart } from '../utils/cartSlice';



const Cart = () => {
const cartItems = useSelector(store=>store.cart.items)

console.log("cart items :- ",cartItems);

const dispatch= useDispatch();
const handleClearCart=()=>{
dispatch(clearCart())
}

  return (
  <> 
    <h1 className='font-bold'>*---Cart---*</h1>
    <div className="clearCartDiv">
        <button className="bg-gradient-to-r from-cyan-500 to-blue-500  text-white px-5 py-1 rounded-xl ml-2 mt-5 mb-5"
          onClick={() => handleClearCart()} >Clear Cart</button>
      </div>
    
    {cartItems.map((elem)=>{
      return  <FoodItems  key={elem?.id} {...elem} />
    })}
    
    
   
  </>
  )
}

export default Cart
