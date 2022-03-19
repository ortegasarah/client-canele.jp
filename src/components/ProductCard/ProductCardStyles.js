import styled from "styled-components";

export const DivCard = styled.div `
    padding: 2rem;
    width: 400px;
`

export const ImgProduct = styled.img `
    height: 400px;
    padding: 5px;
`

export const Detail = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    padding: var(--space-sm) 0;
    a:hover {
    text-decoration: none;
}
`


export const H3 = styled.h3 `
padding: 10px 0 ;
font-weight: 700;
font-size: 30px;
text-transform: uppercase;
`

export const H4 = styled.h4 `
padding: 10px 0 ;
text-transform: uppercase;
`

