import React from 'react'
import { Link } from 'react-router-dom'
import imgCart from '../../assets/ig-02.png'
import { CartSection } from '../Cart/CartStyles'

const CartItem = (product, qtyChangeHandler, removeHandler) => {


    return (
        <>
            <CartSection>
                <img src={imgCart} alt="" width={100} />
                <div>CartItem</div>
                <Link to={`/product/${623496}`}><h1>Product Name</h1></Link>
                <p>£12984</p>

                <button>remove</button>
                <button>add</button>

                <select value={product.quantity} onChange={(e) => qtyChangeHandler(product, e.target.value)}>
                    {[...Array(product.stock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                            {x + 1}
                        </option>
                    ))}
                    
                </select>
                <button onClick={()=> removeHandler(product)}>delete</button>

            </CartSection>
        </>

    )
}

export default CartItem