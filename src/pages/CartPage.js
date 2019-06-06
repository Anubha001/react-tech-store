import React from 'react'
import Hero from '../components/Hero'
import storeBcg from '../images/storeBcg.jpeg'
import Cart from '../pages/Cart'
function CartPage(props) {
  return (
    <>
       <Hero img ={storeBcg} ></Hero>
       <Cart history = {props.history}></Cart>
    </>
  )
}

export default CartPage