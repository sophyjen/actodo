import AddForm from "./AddForm"
import ToDoList from "./TodoList"
import { useState } from "react"

function ToDoContainer()
{   
    const [arrlist, setarrlist] =useState([
        {
            id:1,
            activity: "Plan your day activity"
        }
    ])

    return(
        <div >    
            <div className="flex flex-wrap gap-5">
                <AddForm arrlist={arrlist} setarrlist={setarrlist}/>
                <ToDoList arrlist={arrlist} setarrlist={setarrlist}/>
                
            </div>    
        </div>
    )
}

export default ToDoContainer