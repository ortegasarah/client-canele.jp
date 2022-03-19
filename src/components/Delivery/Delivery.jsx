import React from 'react'
import {Grid, SquareButton, CircleButton} from './DeliveryStyles'
function Delivery() {
  return (
<Grid>
<div>
    <SquareButton>
        <div>
            Order Pickup
        </div>
    </SquareButton>
</div>
<div>
    <CircleButton>
        <div>
            Order Delivery
            <br />
            Osaka
        </div>
    </CircleButton>
</div>
</Grid>  
)
}

export default Delivery