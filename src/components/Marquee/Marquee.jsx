import { Marquee, MarqueeInner, TextSpan} from "./MarqueeStyle"

const MarqueeTxt = () => {
    return (
        <Marquee>
            <MarqueeInner>
                <TextSpan>White</TextSpan>
                <TextSpan>Almond</TextSpan>
                <TextSpan>Roasted green tea</TextSpan>
                <TextSpan>Matcha red bean</TextSpan>
                <TextSpan>Brown sugar walnut</TextSpan>
                <TextSpan>Roasted black soy flour </TextSpan>   
                <TextSpan>White</TextSpan>
                {/* <TextSpan>Almond</TextSpan>
                <TextSpan>Roasted green tea</TextSpan> */}
            </MarqueeInner>
            <MarqueeInner>
                <TextSpan>Matcha red bean</TextSpan>
                {/* <TextSpan>Brown sugar walnut</TextSpan>
                <TextSpan>Roasted black soy flour</TextSpan>
                <TextSpan>White</TextSpan> */}
                <TextSpan>Almond</TextSpan>
                <TextSpan>Roasted green tea</TextSpan>
                <TextSpan>Matcha red bean</TextSpan>
                <TextSpan>Brown sugar walnut</TextSpan>
                <TextSpan>Roasted black soy flour</TextSpan>
            </MarqueeInner>
        </Marquee>
    )}

export default MarqueeTxt;
