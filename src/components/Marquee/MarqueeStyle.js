import styled,  { keyframes }  from "styled-components";

const marqueeAnimation = keyframes`
  from {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  to {
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
  }
`

export const Marquee = styled.div`
    overflow-x: hidden;
    display:flex;
    flex-wrap: nowrap;
    white-space: nowrap;
    min-width: 100%;
`


export const MarqueeInner = styled.div`
    color: #F88C3B;
    width: fit-content;
    display: flex;
    position: relative;
    align-items: center;
    flex-shrink: 0;
    white-space: nowrap;
    transform: translate3d(var(--move-initial), 0, 0);
    animation: ${marqueeAnimation} 40s linear infinite;
`

export const TextSpan = styled.div`
    font-size: 10vw;
    padding: 0 2vw;
    width: max-content;
`

