import React, {useContext} from 'react';
import Modal from 'react-modal';

import { MainContentContext } from "../Content";
import * as I from "../../../../interfaces";
import * as A from "../actions";

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
const ProgramModal = () => {
  const { state, dispatch } = useContext(MainContentContext);
  const program:I.Program = state.modalData;
  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
  }
  const closeModal = () => {
    dispatch({type:A.Actions.closeModal})
  }

  return (
    <Modal
      isOpen={state.isModalOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2>{program.title}</h2>
      <p>{`${program.userId}`}</p>
      <button onClick={closeModal}>close</button>
      <div>
        <p>{program.content}</p>
        <p>更新日:{program.createdDate}</p>
      </div>
    </Modal>
  );
}

export default ProgramModal;
