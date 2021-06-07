import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import './TaskDatails.css';

import Button from '../Button/Button';

const TaskDatails = () => {
  const params = useParams();
  const history = useHistory();

  const handleBackButtonClick = () => {
    history.goBack();
  }
  
  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-datails-container">
        <h2>{params.taskTitle}</h2>
        <p>Texto descritivo da tarefa</p>
      </div>
    </>
  );
}

export default TaskDatails;