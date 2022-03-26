import React from 'react'
import { Grid, SquareButton, CircleButton } from './DeliveryStyles'
function Delivery() {
    return (
        <Grid>
            <div>
                <a href='https://goo.gl/maps/pPsWdzR2wnw7C7MD9' target="_blank">
                    <CircleButton>
                            <p>
                            CANELÉ du JAPON
                            <br />長堀橋店
                            <br />
                            542-0081
                            <br />大阪市中央区南船場1-17-21
                            <br />
                            Open 12:00 - 19:00
                            <br />
                            / 水曜定休
                            </p>
                    </CircleButton>
                </a>
            </div>
            <a href='https://goo.gl/maps/XVmPJeVEYBNmDowo9' target="_blank">
                <SquareButton>
                    <p>
                        CANELÉ du JAPON
                        <br />桜川店
                        <br />
                        556-0022
                        <br /> 大阪市浪速区桜川1-6-24
                        <br />
                        Open 10:00 - 19:00
                        <br />
                        / 水曜定休
                    </p>
                </SquareButton>
            </a>
            <div>
                <a href='https://goo.gl/maps/pXngYp84hJB4EdFS9' target="_blank">
                    <CircleButton>
                        <p>
                            CANELÉ du JAPON
                            <br />doudou 堂島店
                            <br />
                            530-0004
                            <br />大阪市北区堂島浜2-1-13
                            <br />
                            Open 11:00 - 19:00<br />
                            / 水曜定休
                        </p>
                    </CircleButton>
                </a>
            </div>
        </Grid >
    )
}

export default Delivery