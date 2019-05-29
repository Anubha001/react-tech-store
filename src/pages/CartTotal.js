import React from 'react'
import  { ProductConsumer } from '../context/context'

function CartTotal() {
    return (
        <div className="container"> 
        <div className="row">
        <ProductConsumer>
{value =>
{
    const{cartTotal,clearCart,cartSubTotal,cartTax}
    =value;
    return<div className="col text-center my-4">
    <buttton className="btn btn-outline-danger text-capitalize mb-4" onClick={clearCart}> clearCart
    </buttton>
    <h3> cartsubTotal:${cartSubTotal}</h3>
    <h3> Tax:${cartTax}</h3>
    <h3> Total:${cartTotal}</h3>

    </div>
    }}
          
            </ProductConsumer>
        
        </div>
            cartTotals
        </div>
    )
}

export default CartTotal
