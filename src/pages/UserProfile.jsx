import { useState } from "react";
import styled from "styled-components";
import { Tabs, Tab, TabPanel } from "../components/Tabs/Tabs";

const TabsContainer = styled.div`
  display: flex;
  padding: 5rem 10rem;
`;

const TabPanelContainer = styled.div`
  padding: 5rem 10rem;
`;

const Wrapper = styled.section`
    display: flex;
  height: 100vh;
`
const UserProfile = (props) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleChange = (e, value) => {
    setActiveTab(value);
  };

  return (
    <div className="App">
      <h1>ACCOUNT</h1>
      <p>Hello User</p>
      <Wrapper>
      <TabsContainer>
        <Tabs selectedTab={activeTab} onChange={handleChange}>
          <Tab label="ACCOUNT OVERVIEW" value={1}></Tab>
          <Tab label="MY ORDERS" value={2}></Tab>
          <Tab label="MY ADDRESSES" value={3}></Tab>
          <Tab label="SIGN OUT" onClick={props.handleLogout}></Tab>
        </Tabs>
      </TabsContainer>
      <TabPanelContainer>
        <TabPanel value={activeTab} selectedIndex={1}>
          <h1>Tab 1</h1>
          <p>View your latest orders</p>
          <p>View your addresses</p>
          <a href="https://www.instagram.com/caneledujapon/"  target="_blank">Follow us on Instagram</a>
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={2}>
          <h1>Tab 2</h1>
          <p>You haven't placed any orders yet.</p>
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={3}>
          <h1>Tab 3</h1>
          <p>You don't have any addresses yet</p>
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={4}>
          <h1>Tab 4</h1>
        </TabPanel>
      </TabPanelContainer>
      </Wrapper>
    </div>
  );
}


export default UserProfile;