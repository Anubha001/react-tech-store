import React from 'react'
import Hero from '../components/Hero'
import storeBcg from '../images/storeBcg.jpeg'
import Cart from '../pages/Cart'
function CartPage(props) {
  return (
    <>
  

   <Cart history={props.history}></Cart>
       <img src={storeBcg} style={{width:'100%'}}></img>
    </>
  )
}

export default CartPage
