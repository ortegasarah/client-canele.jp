import React from 'react'
import styled from 'styled-components'
import watercolor from "../assets/watercolor.jpg"
import {  H2 } from '../components/Landing/LandingStyles'
import { H1 } from '../globalStyles'

const Wrapper = styled.section`
    display: flex;
    padding: 2em;
    @media screen and (max-width: 1000px){
        flex-direction: column;
    }
`
const TextSection = styled.section`
        padding: 2em;
        width: 80%;
`
const ImgSection = styled.div`
    img {
        width: 100%;
        object-fit: cover;
    }
        position: sticky;
    position: -webkit-sticky;
    top: var(--offset);
    padding: 0  0 4em 4em;
    height: 100vh;
    top: 10rem;
    width: 100%;
    @media screen and (max-width: 1000px){
        object-fit: none;
        width: auto;
               padding:0;
       margin: 0 auto;
    }
`
export default function About() {
    return (

<Wrapper>
    <TextSection>
            <H1>About Us</H1>
            <H2>We're a canelé speciality shop</H2>
            <p>
                While keeping true to the traditional french pastry of the 16th century Bordeaux region of France "canelé de Bordeaux", we blend different flavours of Japan, depending on the season, to create a truly unique pastry.
                <br />
                <br />
                Crisp yet soft on the inside, our combination of Japanese, seasonal ingredients results in an assortment of original flavours. We hope you enjoy our Japanese canelés from "CANELÉ du JAPON".
                <br />
                <br />
                フランスのボルドーで16世紀頃から作り続けられている伝統的な菓子「カヌレ ド ボルドー」に日本の食材と四季を重ね合わせ、まったく新しい「カヌレ ドゥ ジャポン」として表現した、カヌレ専門店です。<br />
                外はカリカリ、中はもっちりとした食感。そこに私たち日本人に馴染みのある四季折々の食材が、今までに無いアクセントとして顔をのぞかせます。どうぞこころゆくまで日本のカヌレ「カヌレ ドゥ ジャポン」の世界をご堪能下さい。<br />
                我們是將16世紀以來於法國的波爾多一直製作至今的傳統甜點可麗露與日本的食材及四季感做結合，以「Canelé du Japon」這個品牌呈現出全新一面的可麗露專門店。<br />
                <br />
                外皮酥脆，內餡鬆軟。在這裡將我們日本人熟悉的四季各種食材以從未有的概念來詮釋與表現。請在日本的可麗露「Canelé du Japon」的世界裡盡情享受與品嚐吧！</p>

            </TextSection>
            <ImgSection>
            <img src={watercolor} alt="" height={700} />
            </ImgSection>
            </Wrapper>
    )
}