import React from 'react'
import { Link } from 'react-router-dom'
import imgCart from '../../assets/ig-02.png'

const CartItem = () => {
    return (
        <>
            <img src={imgCart} alt="" width={100}/>
            <div>CartItem</div>
            <Link to={`/product/${623496}`}><h1>Product Name</h1></Link>
            <p>£12984</p>

            <button>remove</button>
            <button>add</button>
        </>

    )
}

export default CartItem