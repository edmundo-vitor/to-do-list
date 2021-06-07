import React, { useState, useEffect } from 'react';
import { v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';

import Tasks from './components/Tasks/Tasks';
import AddTask from './components/AddTask/AddTask';
import Header from './components/Header/Header';
import TaskDatails from './components/TaskDatails/TaskDatails';

const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      completed: false
    },
    {
      id: 2,
      title: "Ler livros",
      completed: true
    }
  ]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10');
      
      setTasks(data);
    }

    fetchTasks();
  }, []);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) return {...task, completed: !task.completed}

      return task;
    });

    setTasks(newTasks);
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks, {
      id: uuidv4(),
      title: taskTitle,
      completed: false
    }]

    setTasks(newTasks);
  }

  return (
    <Router>
      <div className="container">
        <Header />

        <Route path="/" exact render={() => (
          <>
            <AddTask handleTaskAddition={handleTaskAddition}/>
            <Tasks 
              tasks={tasks} 
              handleTaskClick={handleTaskClick} 
              handleTaskDeletion={handleTaskDeletion}
            />
          </>
        )} />

        <Route path="/task/:taskTitle" exact component={TaskDatails}/>

      </div>
    </Router>
  );
}

export default App;