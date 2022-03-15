import styled, { css, keyframes } from "styled-components";

export const TabHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;


export const StylizedTab = styled.button`
  color: #000;
  width: 100%;
  padding: 20px 0px;
  font-size: 1.25rem;
  background-color: transparent;
  border: none;
  text-align: left;
  border-bottom-color: #393e46;
  cursor: ${(p) => (p.disabled ? "default" : "pointer")};
`;

export const StyledTabPanel = styled.div`
  display: ${(p) => (p.active ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;

export const TabsHolder = styled.div`
  display: flex;
  /* can be used to stack them vertically by using column*/
  flex-direction: column;
`;

export const inactiveTab = {
  opacity: 0.65
};

// width, index,
/**
 * [0] [1] [2] ...
 * W * index
 *
 */
export const TabSlider = styled.div`
  /* width: ${(props) => `${props.width}px`};
  height: 4px;
  background-color: #feca57;
  transition: 0.2s;
  transform: ${(props) => `translateX(${props.width * props.index}px)`}; */
`;

const inset = keyframes`
  0% {
    -webkit-box-shadow: inset 0 0 0 0 rgba(238, 82, 83, 0);
            box-shadow: inset 0 0 0 0 rgba(238, 82, 83, 0);
  }
  100% {
    -webkit-box-shadow: inset 0 0 14px 0px rgba(238, 82, 83, 0.95);
            box-shadow: inset 0 0 14px 0px rgba(238, 82, 83, 0.95);
  }
`;
