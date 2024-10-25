import ToDoItem from "./ToDoItem"

function ToDoList(props)
{
    const arrlist =props.arrlist
    const setarrlist = props.setarrlist

    return(      
        <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
            <h1 className="text-2xl font-medium">Today's  Activities</h1>
            { arrlist.length===0?<p>You haven't added anything yet</p>:"" }
            {
                arrlist.map(function(item, index){
                     return <ToDoItem index={index+1} activity={item.activity} arrlist={arrlist} setarrlist={setarrlist}  />
                })
            }
        </div>
    )
}

export default ToDoList