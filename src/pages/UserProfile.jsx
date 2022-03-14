import { useState } from "react";
import styled from "styled-components";
import { Tabs, Tab, TabPanel } from "../components/Tabs/Tabs";
import { Wrapper } from "../components/Tabs/TabsStyles";

const TabsContainer = styled.div`
  display: flex;
  padding: 5rem 10rem;
`;

const TabPanelContainer = styled.div`
  /* height: 100vh; */
  padding: 5rem 10rem;

`;

const UserProfile = () => {
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
          <Tab label="ACCOUNT OVERVIEW" value={0}></Tab>
          <Tab label="MY ORDERS" value={1}></Tab>
          <Tab label="MY ADDRESSES" value={2}></Tab>
          <Tab label="SIGN OUT" value={3}></Tab>
        </Tabs>
      </TabsContainer>
      <TabPanelContainer>
        <TabPanel value={activeTab} selectedIndex={0}>
          <h1>Tab 1</h1>
          <p>View your latest orders</p>
          <p>View your addresses</p>
          <p>Follow us on Instagram</p>
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={1}>
          <h1>Tab 2</h1>
          <p>You haven't placed any orders yet.</p>
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={2}>
          <h1>Tab 3</h1>
          <p>You don't have any addresses yet</p>
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={3}>
          <h1>Tab 4</h1>
        </TabPanel>
      </TabPanelContainer>
      </Wrapper>
    </div>
  );
}


export default UserProfile;