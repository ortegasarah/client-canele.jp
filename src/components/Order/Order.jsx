import React from 'react'
import { getOrder } from '../Redux/actions/orderActions'

const Order = () => {
  const getOrder = useSelector(state => state.getOrder);
  useEffect(() => {
    if (order && id !== order._id) {
        dispatch(getOrder(id))
    }
}, [dispatch, order,])

  const { loading, error, order } = getOrder;
  return (
    loading ? <p>Loading</p> : error ? <h2>Ups! There was an error! Please refresh the page or come back later</h2> :

    <>
   
    </>
  )
}

export default Order