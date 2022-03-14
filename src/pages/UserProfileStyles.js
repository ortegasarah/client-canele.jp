import styled from "styled-components";

// export const Wrapper = styled.section`
//     height: 100vh;
//     background-color: #FBF8F1;
//     border-bottom: 1px solid #000;
// `

export const Wrapper = styled.section`
 display: flex;
 align-items: center;
 justify-content: center;
 overflow: hidden;
 background-color: #FBF8F1;
`
export const TabsContainer = styled.div`
 width: 80%;
 height: auto;
 min-height: 400px;
 background: #053742;
 margin: 3.5rem auto 1.5rem;
 padding: 2rem 1rem;
 color: #E8F0F2;
 border-radius: 2rem;
 @media (max-width: 769px) {
  padding: 2rem 0;
}
`

export const FirstTab = styled.div`
p {
    font-size: 2em;
}
`

export const SecondTab = styled.div`
p {
    font-size: 2em;
}
`