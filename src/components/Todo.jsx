// import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Header from './Header';
import AddTask from './AddTask';
import ShowTask from './ShowTask';
import Footer from './Footer';

const Todo = () => {
    const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem("tasklist")) || []);
  const [task, setTask ] = useState([]);

  useEffect( () => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist))
  }, [tasklist]);

  return (
    <>
      <div className='App'>
        <div className='container'>
          <Header/>
          <AddTask 
            tasklist={tasklist} 
            setTasklist={setTasklist}
            task={task}
            setTask={setTask}
            />

          <ShowTask 
            tasklist={tasklist} 
            setTasklist={setTasklist}
            task={task}
            setTask={setTask}
            />
          <Footer/>
        </div>
      </div>
    </>    
  )
}

export default Todo