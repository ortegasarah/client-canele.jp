import { useState } from "react";
import { Wrapper, TabsContainer, FirstTab, SecondTab  } from './UserProfileStyles'

const UserProfile = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };

    
    return(
    <>
    <Wrapper>
    <h1>ACCOUNT</h1>
    <p>Hi NameOfUser</p>
    <br/>
    <ul className="nav">
        <li>ACCOUNT OVERVIEW</li>
        <li>MY ORDERS</li>
        <li>MY ADDRESSES</li>
        <li>SIGN OUT</li>
      </ul>
      <TabsContainer>
    <FirstTab>
        <p>ACCOUNT OVERVIEW</p>
    </FirstTab>

    <SecondTab>
        <p>SIGN OUT</p>
    </SecondTab>
    </TabsContainer>

    </Wrapper>
    </>
    )
}

export default UserProfile;