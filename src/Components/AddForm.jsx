import { useState } from "react"

function AddForm(props)
{  
    const arrlist =props.arrlist
    const setarrlist = props.setarrlist

    const [newarrlist, setnewarrlist] = useState("")
    
    const handlechange =(event) =>{
        setnewarrlist(event.target.value)
    }

    const Handleadd=()=>{
        setarrlist([...arrlist,{id:arrlist.length+1, activity:newarrlist}])
        setnewarrlist("")
    }

    return(
        <div className="flex flex-col gap-3" >
            <h1 className="text-2xl font-medium">Manage Activities</h1>
            <div>
                <input className="border border-black bg-transparent p-1" type="text" value={newarrlist} onChange={handlechange}  placeholder="Enter text...." />
                <button className="bg-black text-white p-1 border border-black" onClick={Handleadd} >Add</button>
            </div>
        </div>
    )
}

export default AddForm