import styled from "styled-components";


export const Grid = styled.section `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 5rem auto;
`

export const SquareButton = styled.button `
    width: 30rem;
    height: 30rem;
    position: relative;
    display: flex;
    align-content: center;
    justify-content: center;
    place-content: center;
    background: transparent;
    border: 2px solid var(--orange);
    color: var(--orange);
    cursor: pointer;
    font-size: 2rem;
    text-align: left;
    align-items: center;

    &:hover{
        color: var(--beige);
        background: var(--orange);
    }
`

export const CircleButton = styled.button `
    border-radius: 100vw;
    width: 30rem;
    height: 30rem;
    position: relative;
    display: flex;
    /* align-content: center;
    justify-content: center; */
    place-content: center;
    background: transparent;
    border: 2px solid var(--orange);
    color: var(--orange);
    cursor: pointer;
    font-size: 2rem;
    text-align: left;
    align-items: center;

    &:hover{
        color: var(--beige);
        background: var(--orange);
    }
`