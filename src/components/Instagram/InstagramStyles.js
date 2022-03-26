import styled from "styled-components";

export const WrapperIg = styled.div `
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    position: relative;
    flex-shrink: 0;
    padding: 2rem  0;
    @media screen and (max-width: 1000px){
        padding: 0;
    
}
`

export const Ig = styled.img `
    width: 13%;
    padding: 5px;
    @media screen and (max-width: 1000px){
        display: none;
    }

`

