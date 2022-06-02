import { useState } from "react";
import styled from "styled-components";
import { Tabs, Tab, TabPanel } from "../components/Tabs/Tabs";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom'
import Order from "../components/Order/Order";
import { ButtonOrange, H1 } from "../globalStyles";
import { StylizedTab } from "../components/Tabs/TabsStyles";
import { H2 } from "../components/Landing/LandingStyles";



/* CREATE TABS FOR PROFIL */
const TabsContainer = styled.div`
  display: flex;
  padding: 5rem 10rem;
  background-color: var(--orange);
`;

const TabPanelContainer = styled.div`
  padding: 5rem 10rem;
`;

const Wrapper = styled.section`
    display: flex;
    padding:2em;
    height: 80vh;
`
const HeaderProfil = styled.div`
  padding: 2em;
`
const UserProfile = (props) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleChange = (e, value) => {
    setActiveTab(value);
  };

  return (
    <div className="App">
      <HeaderProfil>
        <H1>MY ACCOUNT</H1>
        <H2>Hello {props.user.firstName}</H2>
      </HeaderProfil>

      <Wrapper>
        <TabsContainer>
          <Tabs selectedTab={activeTab} onChange={handleChange}>
            <Tab label="ACCOUNT OVERVIEW" value={1}></Tab>
            <Tab label="MY ORDERS" value={2}></Tab>
          </Tabs>
        </TabsContainer>
        
        <TabPanelContainer>
          <TabPanel value={activeTab} selectedIndex={1}>
            <h1>ACCOUNT OVERVIEW</h1>
            <p>{props.user.firstName}</p>
            <p>{props.user.lastName}</p>
            <p>{props.user.email}</p>
            <ButtonOrange onClick={props.handleLogout}>LOG OUT </ButtonOrange>
            <p><a href="https://www.instagram.com/caneledujapon/" target="_blank">Follow us on Instagram</a></p>
          </TabPanel>


          <TabPanel value={activeTab} selectedIndex={2}>
            <h1>MY ORDERS</h1>
            <p>You haven't placed any orders yet.</p>
{/* 
            {getOrders.length === 0 ? (
              <>
                <p>You haven't placed any orders yet.</p>
              </>
            ) : <Order />} */}
            <Order />
          </TabPanel>



        </TabPanelContainer>
      </Wrapper>
    </div>
  );
}


export default UserProfile;