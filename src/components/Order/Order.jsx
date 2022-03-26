import React from 'react'
import { getOrder } from '../../Redux/actions/orderActions'
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { denormalizeData } from '../../utils/formatter'

const Order = () => {
//   const dispatch = useDispatch()
//   const [orders, setOrders] = useState([])
//   // const getOrdert = useSelector(state => state.getOrder);
//     useEffect(() => {
//       setOrders(denormalizeData(order));
//   }, [])
//   const getOrderDetails = (id) => {
//     dispatch(getOrder(id))
// }

//   const { order, loading, error } = getOrder;


  return (
    <div>
      {/* {orders.length === 0 ? (
        <>
          <p>You haven't placed any orders yet.</p>
        </>
      ) :
        (
          orders.map((order) => (
            <div>
              <p>{order._id}</p>
              <p>{order.total}</p>
              <p>{order.createdAt}</p>
            </div>
          ))



        )
      } */}

    </div>
  )
}

export default Order