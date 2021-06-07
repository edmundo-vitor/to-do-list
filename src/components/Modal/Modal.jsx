import React, { useContext } from 'react';

import './Modal.css'

import Button from '../Button/Button';
import {ModalContext} from '../Task/Task';

const Modal = ({ children }) => {
  const modal = useContext(ModalContext);

  const handleTaskDelete = () => {
    modal.delete(modal.taskId);
    //Altera a visibilidade do modal
    modal.modalView();
  }

  const handleClickOut = (e) => {
    if(e.target.className === 'modal') modal.modalView();
  }

  return (
    <>
      <div className="modal" onClick={handleClickOut}>
        <div className="modal-container">
          <div className="modal-content">
            <h2>Deseja realmente deletar a task - {children}</h2>
            <div className="modal-buttons">
              <Button onClick={modal.modalView}>Cancelar</Button>
              <Button onClick={handleTaskDelete}>Confirmar</Button>
            </div> 
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;