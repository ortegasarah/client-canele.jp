import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import imgCart from '../../assets/ig-02.png'
import { CartSection } from '../Cart/CartStyles'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductDetails } from '../../Redux/actions/productActions'
import { QuantityButton } from '../../pages/ProductDetailStyles'
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md"
import { DeleteButton } from '../../globalStyles'

const CartItem = ({ name, image_url, price, _id, removeProduct = () => { }, ...props }) => {

    return (
        <>
            <CartSection>
                {/* <img src={image_url[0]} alt={name} width={200} /> */}
                <Link to={`/products/${_id}`}><h1>{name}</h1></Link>
                <p>円{price}</p>

                <DeleteButton onClick={removeProduct}>
                    <MdDelete />
                </DeleteButton>
                {/* 
                <button onClick={() => removeHandler(product)}>delete</button> */}

            </CartSection>
        </>

    )
}

export default CartItem