import "../App.css";
import { useEffect, useState } from "react";
import GlobalStyle, { ButtonBlack } from '../globalStyles';
import Navbar from "../components/Navbar/Navbar";
import Landing from "../components/Landing/Landing";
import Modal from "../components/Modal/Modal";
import ModalInner from "../components/ModalInner/ModalInner";
import Instagram from "../components/Instagram/Instagram";



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
      <Landing />
      <ButtonBlack onClick={toggleModal}>Sign Up for updates </ButtonBlack>
      <Instagram />
      </header>
    </div>
  );
}

export default HomePage;
