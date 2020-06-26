import React from 'react'
import CartItem from './CartItem'
export default function CartList ({value}){
    const {cart} = value;
    return (
        <div>
            {cart.map(item=> {
                return <CartItem item={item} key={item.id} value={value}/>
            })}
        </div>
    )
}
