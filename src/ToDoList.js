import React from "react";
import { useState,useEffect } from "react";

function getTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem("tasks"));

    if (tasks) {
        return tasks;
    }

    else {
         return []
    }
}

function ToDOList(){

        const[tasks,setTasks]=useState(getTasksFromLocalStorage());
        
        const[newTask,setNewTask]=useState("");
        

    
        // Save tasks to local storage whenever tasks state changes
        // useEffect(() => {
            
        //     localStorage.setItem("tasks", JSON.stringify(tasks));
            
        // }, [tasks]);
        


        function handleInputChange(event){
            setNewTask(event.target.value)
        }


        function addTask(){

            if(newTask.trim() !==""){
                setTasks( t=> {
                const newTasks =       [...t,newTask];
                localStorage.setItem("tasks", JSON.stringify(newTasks));
                return newTasks;
                
            });
                
                setNewTask("");
            }
        }

        function deleteTask(index){
            const updatedTasks=tasks.filter((_, i)=> i !==index);
            localStorage.setItem("tasks", JSON.stringify(updatedTasks));
            setTasks(updatedTasks);

        }

        function moveTaskUp(index){
            if(index>0){
                const updatedTasks=[...tasks];
                [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
                setTasks(updatedTasks)
            }

        }

        function moveTaskDown(index){
            if(index< tasks.length -1){
                const updatedTasks=[...tasks];
                [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
                setTasks(updatedTasks)
            }

        }


        return(
        <div className="to-do-list">

            <h1>TO DO LIST</h1>

            <div>
                <input 
                       type="text"
                       placeholder="Enter your task"
                       value={newTask}
                       onChange={handleInputChange}
                /> 
                <button   
                        className="add-button"  
                        onClick={addTask}>
                            Add
                        </button>
            </div>

            <ol>
                {tasks.map((task,index)=>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button
                                className="delete-button"
                                onClick={()=>deleteTask(index)}>Delete        
                        </button>
                        <button
                                className="moveUp-button"
                                onClick={()=>moveTaskUp(index)}>Up   
                        </button>
                        <button
                                className="moveDown-button"
                                onClick={()=>moveTaskDown(index)}>Down    
                        </button>
                    </li>
                )}

            </ol>

        </div>);

    }

    export default ToDOList