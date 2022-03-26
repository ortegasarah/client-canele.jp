import styled from "styled-components";


export const Grid = styled.section `
    display: grid;
    justify-content: space-evenly;
    align-items: center;
    margin: 5rem auto;
    @media (min-width: 1100px){
        grid-auto-flow: column;
}
`

export const SquareButton = styled.button `
    margin: 3rem auto;
    width: 30rem;
    height: 30rem;
    position: relative;
    display: flex;
    align-content: center;
    justify-content: center;
    place-content: center;
    background: transparent;
    border: 2px solid var(--orange);
    cursor: pointer;
    font-size: 2rem;
    text-align: center;
    align-items: center;
    transition: 0.3s;
    p {
        font-size: 0.8em;
    }
    &:hover{
        p{
            color: var(--beige);
        }
        background: var(--orange);
    }
    @media (max-width: 1500px){
        width: 20rem;
        height: 20rem;
        p {
            font-size:0.6em;
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
    text-align: center;
    align-items: center;
    transition: 0.3s;
    p {
        font-size: 0.8em;
    }
    &:hover{
        p{
            color: var(--beige);
        }
        background: var(--orange);
    }
    @media (max-width: 1500px){
        width: 20rem;
        height: 20rem;
        p {
            font-size:0.6em;
        }
    }
`