import im1 from "../Assets/images/bin.png"
function ToDoItem(props)
{
    const arrlist = props.arrlist
    const setarrlist = props.setarrlist
    const index= props.index
        
    function Handledelete(Deleteid)
    {
        var temparr = arrlist.filter(function(item){
            if(item.id=== Deleteid)
                {
                    return false
                }
                else
                {
                    return true
                }
            })   
            setarrlist(temparr)     
    }

    return(
        <div className="flex justify-between">
            <p>{index}. {props.activity}</p>
            <button className="text-red-500" onClick={function(){Handledelete(index)}}><img className=" h-5" src={im1} alt="Delete"/></button>
        </div>
    )
}

export default ToDoItem