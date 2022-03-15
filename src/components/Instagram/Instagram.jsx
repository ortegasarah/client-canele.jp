import React from "react";
import ig01 from "../../assets/ig-01.png";
import ig02 from "../../assets/ig-02.png";
import ig03 from "../../assets/ig-03.png";
import ig04 from "../../assets/ig-04.png";
import ig05 from "../../assets/ig-05.png";
import ig06 from "../../assets/ig-06.png";
import ig07 from "../../assets/ig-07.png";
import { WrapperIg, Ig  } from './InstagramStyles';
import { H1Stroke } from "../../globalStyles";
const Instagram = (props) => {
    return (
<>
<H1Stroke>@caneledujapon</H1Stroke>
<WrapperIg>
<Ig src={ig01} alt=""/>
<Ig src={ig02} alt=""/>
<Ig src={ig03} alt=""/>
<Ig src={ig04} alt=""/>
<Ig src={ig05} alt=""/>
<Ig src={ig06} alt=""/>
<Ig src={ig07} alt=""/>
</WrapperIg>
</>
    )}

export default Instagram;
