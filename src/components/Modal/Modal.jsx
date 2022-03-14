import React from "react";
import { Modal, BG, Close } from "./ModalStyles";
const ModalComponent = ({ toggleModal, children }) => (
  <>
    <Modal>
      <Close onClick={toggleModal} />
      {children}
    </Modal>
    <BG onClick={toggleModal} />
  </>
);

export default ModalComponent;
