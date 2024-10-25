import { Link, useNavigate } from "react-router-dom"
import Signup from './Signup';
import Landing from "./Landing";
import { useState } from "react";
import { Navigate } from "react-router-dom";


function Login(props)
{
    const [eusername, seteusernam] =useState()
    const [epwd, setepwd] =useState()
    const [ruser, setruser] = useState(true)

    const userdet = props.userdet
    const setuserdet = props.setuserdet
    

    const navigate = useNavigate()

    function changeusername(event)
    {
        seteusernam(event.target.value)
    }

    function changepwd(event)
    {
        setepwd(event.target.value)
    }

    function showlanding()
    {             
       let userfound = false
        userdet.forEach(function(item){           
            if(item.username === eusername && item.pwd === epwd)
                {
                    console.log("Login Successful")
                    userfound = true
                    navigate("/landing", {state:{user:eusername}})
                }
              
        })

        if(userfound===false)
            {
                console.log("Login Failed")
                setruser(false)
            }
        
    }

    return(
        <div className="bg-black p-10">
            <div className="bg-white p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                {
                    ruser?<p>I help you manage your activities after you login :)</p> : <p className="text-red-500">Pleae signup Before you Login!!!</p>
                }
                <div className="flex flex-col gap-2 my-2">
                    <input 
                    className="w-52 border-black border rounded-md p-1 bg-transparent" 
                    type="text" 
                    placeholder="username" 
                    onChange={changeusername} />
                    
                    <input 
                    className="w-52 border-black border rounded-md p-1 bg-transparent" 
                    type="text" 
                    placeholder="password" 
                    onChange={changepwd}/>
                    
                    <button 
                    className="w-24 border rounded-md p-1 bg-orange-400" 
                    onClick={showlanding}>Login</button>
                    
                    <p>Don't have an account? <Link className="underline" to={"/signup"}>Sign Up</Link></p>
                </div>
            </div>            
        </div>

        

    )
}

export default Login