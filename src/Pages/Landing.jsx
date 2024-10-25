import { useLocation } from "react-router-dom"
import Header from "../Components/Header";
import Card from "../Components/card";
import ToDoContainer from "../Components/Todocontainer";

function Landing()
{
   const data = useLocation()    
   
    return(
    <div className="bg-black p-10">
      <div className="bg-white p-10 border rounded-md">
        <Header eusername={data.state.user} />
        <div className="flex justify-between gap-7 my-5 flex-wrap">
          <Card bgcolor={"#8272DA"} title={"23 C"} subtitle={"Chennai"}/>
          <Card bgcolor={"#FC6662"} title={"22 October"} subtitle={"07:20"}/>
          <Card bgcolor={"#FCA301"} title={"Built Using"} subtitle={"React"}/>          
        </div>
        <ToDoContainer />        
      </div>
    </div>)
}

export default Landing