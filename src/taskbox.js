import { useState } from 'react';
import ReactDOM from 'react-dom/client';


export const Taskbox=(props) =>{
    
return(
    <div className='Taskbox'>
        {props.tasks.map((task) => <p>{task}</p>)}
    </div>
)
}