import styled from "styled-components";


export const Grid = styled.section `
display: grid;
`

export const SquareButton = styled.button `
    width: 24rem;
    height: 24rem;
    position: relative;
    display: grid;
    align-content: center;
    justify-content: center;
    place-content: center;
    background: transparent;
    border: 2px solid var(--orange);
    color: var(--orange);
    cursor: pointer;
    font-size: 2rem;

    &:hover{
        color: var(--beige);
        background: var(--orange);
    }
`

export const CircleButton = styled.button `
    border-radius: 100vw;
    width: 24rem;
    height: 24rem;
    position: relative;
    display: grid;
    align-content: center;
    justify-content: center;
    place-content: center;
    background: transparent;
    border: 2px solid var(--orange);
    color: var(--orange);
    cursor: pointer;
    font-size: 2rem;


    &:hover{
        color: var(--beige);
        background: var(--orange);
    }
`