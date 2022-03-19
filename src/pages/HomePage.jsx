import { useEffect, useState } from "react";
import GlobalStyle, { ButtonOrange } from '../globalStyles';

/* COMPONENTS */
import Navbar from "../components/Navbar/Navbar";
import Landing from "../components/Landing/Landing";
import Modal from "../components/Modal/Modal";
import ModalInner from "../components/ModalInner/ModalInner";
import Instagram from "../components/Instagram/Instagram";
import { HeroImg, Logo } from "../components/Navbar/NavbarStyles";
import Delivery from "../components/Delivery/Delivery";



function HomePage() {

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal((showModal) => !showModal);
  };

  return (
    <div className="App">
      <header className="App-header">
      <GlobalStyle />
      {showModal && (
        <Modal toggleModal={toggleModal}>
          <ModalInner />
        </Modal>
      )}
      <HeroImg><Logo/> </HeroImg>
      <Landing />
      {/* <Delivery/> */}
      {/* <ButtonOrange onClick={toggleModal}>Sign Up for updates </ButtonOrange> */}
      <Instagram />
      </header>
    </div>
  );
}

export default HomePage;
