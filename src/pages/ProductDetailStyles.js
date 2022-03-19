import styled from 'styled-components'

export const Section = styled.section `
    display: flex;
    flex-direction: row;
    padding: 0 4em;

    div {
        width: 100%;
    }

    &:nth-child(odd){
        flex-direction: row-reverse;
    }

    p {
        padding: 10px;
    }
`
export const StickyImSgSection = styled.div`
    /* flex-basis: calc(50% + 20em); */
    img {
        width: 100%;
        object-fit: cover;
    }
`

export const TextDetail = styled.div `
    position: sticky;
    position: -webkit-sticky;
    top: var(--offset);
    padding: 0  0 4em 4em;
    height: 100vh;
    top: 6rem;
`

export const ProductButtonSection = styled.div `
    display: grid;
    margin: 4px 0;
    grid-column-gap: 3rem;    /* --cluster-column-gap: 0.25rem;
    flex-wrap: wrap;
    margin-left: calc(var(--cluster-column-gap, 0) * -1);
    margin-top: calc(var(--cluster-row-gap, 0) * -1);
    margin: 4px; */
`
