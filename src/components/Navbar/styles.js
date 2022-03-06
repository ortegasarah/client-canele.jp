import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  padding: 2em;
  justify-content: space-around;
  flex-wrap: wrap;
  background: #FBF8F1;
  font-weight: 600;
  border-bottom: 1px solid #000;
`

export const Menu = styled.li `
  display:inline-block;
  cursor:pointer;
  margin: 0;
  padding: 0 10px;
  list-style: none;
  background: 
    linear-gradient(currentColor 0 0) 
    var(--p, 0) 100% /var(--d, 0) 3px 
  no-repeat;
  transition: 0.3s, background-position 0s 0.3s;
}
&:hover {
  --d: 100%;
  --p: 100%;
}
&:a:hover {
  text-decoration: none;

}

`

// .nav__projectName {
//   color: #e4f9ff;
//   text-decoration: none;
// }

// .authLink {
//   color: #61dafb;
//   text-decoration: none;
//   transition: color 0.2s ease-in-out;
// }

// .authLink + .authLink {
//   padding: 1em;
// }

// .authLink:hover {
//   color: #ffffff;
// }

// .nav-logoutbtn {
//   font-family: inherit;
//   font-weight: inherit;
//   padding: 0.5em 1em;
//   margin-left: 1em;
//   background-color: #5595ff;
//   box-shadow: 0 0 5px 0 aliceblue;
//   border: none;
//   border-radius: 2px;
//   cursor: pointer;
//   color: #e3f2ff;
//   transition: all 0.2s ease-in-out;
//   position: sticky;
//   top: 0;
// }

// .nav-logoutbtn:hover {
//   transform: scale(1.05);
//   background-color: #d13e3e;
// }
