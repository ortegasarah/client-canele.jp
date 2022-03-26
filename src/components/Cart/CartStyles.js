import styled from "styled-components";

export const CartSection = styled.section `
text-align: center;
    p, h1{
        color: var(--beige);
    }
  `
export const CartContainer = styled.div `
    display: flex;
    text-align: center;
    flex-direction: column;
    p {
        padding: 15px;
    }
    `
    

export const Total = styled.div `
    padding: 15px;
    display:flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    p{
        padding: 10px;
    }
`

export const ImgCart = styled.img`
    padding: 5%;
    width: 100px;
`