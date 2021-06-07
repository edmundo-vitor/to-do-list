import React, { useState, createContext } from 'react';
import { CgClose, CgInfo } from 'react-icons/cg';
import { useHistory } from 'react-router-dom';

import './Task.css';

import Modal from '../Modal/Modal';

export const ModalContext = createContext();

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  
  const history = useHistory();
  const [ isModalVisible, setModalVisible ] = useState(false);
  

  const handleTaskDetailsClick = () => {
    history.push(`/task/${task.title}`);
  }

  const handleTaskModalClick = () => {
    setModalVisible(!isModalVisible);
  }

  return (
    <div 
      className="task-container" 
      style={task.completed ? {borderLeft: '6px solid chartreuse'} : {} }
    >
      <ModalContext.Provider value={
        {
          taskId: task.id,
          delete: handleTaskDeletion,
          modalView: handleTaskModalClick
        }
      }>
        {isModalVisible ? <Modal> {task.title} </Modal>  : null}
      </ModalContext.Provider>

      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>
      
      <div className="buttons-container">
        <button className="remove-task-button" onClick={handleTaskModalClick}>
          <CgClose />
        </button>

        <button className="see-task-details-button" onClick={handleTaskDetailsClick}>
          <CgInfo />
        </button>
      </div>
      
    </div>

  );
}

export default Task;