import { useState } from "react"
import {v4 as uuidv4} from 'uuid';
import './TodoList.css'

export default function TodoList(){
    let [todos , settodo] = useState([{ task: 'Eat' , id : uuidv4() , done: false}]);
    let [ttasks , settasks] = useState("");

    function AddTaskbtn(){
        settodo( (prevValue) =>([...prevValue, { task : ttasks , id : uuidv4()}]));
        settasks("");
    };
    function Updateinpt(e){
        settasks(e.target.value);
    };
    function delTask(id){
        settodo((prevTodo) => todos.filter((prevTodo)=>prevTodo.id != id));
    }

    function markAll(){
     settodo((prevtask)=>
        prevtask.map((todo)=>{
        return {
            ...todo ,
             done: !todo.done
        };TodoList
      })
    );   
     };


     function upperCaseOne(id){
        settodo((prevtask)=>
           prevtask.map((todo)=>{
            if(todo.id == id){
                return {
                    ...todo ,
                     task: todo.task.toUpperCase()
                };
            }else{
                return todo;
            }

         })
       );   
        };


    function toggleDone(id) {
            settodo((prevTodos) =>
                prevTodos.map((todo) => {
                    if (todo.id === id) {
                        return {
                            ...todo,
                            done: !todo.done  
                            // we can't use done: true because it explicitly update done and we can not revert it!
                        };
                    } else {
                        return todo;
                    }
                })
            );
        }



    return(                                                                                           
        <div className="maindiv">
            <h3>Get Things Done!</h3>
            <div className="inpbtn">
            <input className="inpt" placeholder="Add Tasks!" value={ttasks} onChange={Updateinpt}></input><button className="addbtn" onClick={AddTaskbtn}> Add Item</button>
            </div>
            
            
            <br></br>
            <br></br>
            <div className="listdiv">
                 <ul>
                  {
                    todos.map((todo)=>
                    
                    (<li key={todo.id}>
                    <span style = {todo.done ? {textDecorationLine : "line-through"} : {}} >{todo.task}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="btn" onClick={() => delTask(todo.id)}>Delete</button>
                    {/* <button onClick={() => upperCaseOne(todo.id)}>Upper case me</button> */}
                    <button className="btn" onClick={() => toggleDone(todo.id)}>{todo.done ? 'Undo' : 'Mark as Done'}</button>
                    </li>))
                    
                  }
                </ul>
            </div>
            <br></br>
            <br></br>
            
            <button  className="btn" onClick={markAll}>Mark all se done!</button>
            <br></br>
            <br></br>
        </div>

    )
}