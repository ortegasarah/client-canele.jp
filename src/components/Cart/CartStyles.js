import styled from "styled-components";

export const CartSection = styled.section `
    p, h1{
        color: var(--beige);
    }
  `
export const CartContainer = styled.div `
    display: flex;
    justify-content: space-around;
`

export const Total = styled.div `
    display:flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-around;
`

export const ImgCart = styled.img`
    padding: 5%;
    width: 200px;
`