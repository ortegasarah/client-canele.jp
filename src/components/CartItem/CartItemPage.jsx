import React from 'react'
import { Link } from 'react-router-dom'
import { CartSection, ImgCart } from '../Cart/CartStyles'
import { MdDelete } from "react-icons/md"
import { DeleteButton } from '../../globalStyles'

const CartItem = ({ name, price, _id, removeProduct = () => { }, ...props }) => {
    return (
        <>

            <CartSection>
                <Link to={`/products/${_id}`}><p>{name}</p></Link>

                <p>円{price}</p>

                <DeleteButton onClick={removeProduct}>
                    <MdDelete size={40}  />
                </DeleteButton>
            </CartSection>
        </>

    )
}

export default CartItem