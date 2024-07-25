import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';


export function Input(props) {

    const [task, setTask] = useState("");
    
    function add() {
      props.addTask(task);
      setTask('')
    }

    return (<>
      <input 
          placeholder='Add Task'
            type="text" 
            value={task}
            onChange={(e) => {


              setTask(e.currentTarget.value)
            }}
  
          />
          <button onClick={add} className='Add' >Add</button>
  
      </>)
}
