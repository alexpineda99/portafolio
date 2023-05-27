import React, { useState } from 'react';
import "../Css/index.css";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Highfive from "../Assets/img/bitmoji-20211123015020-removebg-preview.png";

const Popup = () => {
  const [open, setOpen] = useState(true);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      {/* <button onClick={onOpenModal}>Open modal</button> */}
      <Modal open={open} onClose={onCloseModal} center>
        <h2>¡Email sent to Alex!</h2>
        <h2>Thanks for contact me!</h2>
        <div className="higfive-div">
          <img src={Highfive} alt="Greetings" className="bit-img" />
        </div>
      </Modal>
    </div>
  );
};

export default Popup;