
import React from 'react'
import Title from '../components/Title'
import CartTotals from './CartTotal'
import CartColoumn from '../pages/CartColoumn'
import CartLIst from './CartLIst';
export default function Cart(history) {
    return (
        <section className="py-5">
        {/*title*/}
        <div className="container">
        
        <Title title="your cart items" center />
        
        </div>
        {/*cart coloumns*/ }
            <CartColoumn></CartColoumn>
             {/*cart List*/ }
            <CartLIst></CartLIst>
             {/*cart Totals*/ }
          
<CartTotals history ={history}></CartTotals>
        </section>

    )
}