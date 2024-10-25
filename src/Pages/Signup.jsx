import { Link, useNavigate } from "react-router-dom"
import Login from "./Login"
import { useState } from "react"
import { Navigate } from "react-router-dom"

function Signup(props)
{
    const userdet = props.userdet
    const setuserdet = props.setuserdet

    const navigate = useNavigate()

    const [eusername, seteusernam] =useState()
    const [epwd, setepwd] =useState()

    function changeusername(event)
    {
        seteusernam(event.target.value)
    }

    function changepwd(event)
    {
        setepwd(event.target.value)
    }

    function updateuser()
    {
        setuserdet([...userdet,{username:eusername, pwd:epwd}])
        navigate("/")
    }

    return(
        <div className="bg-black p-10">
            <div className="bg-white p-10 border rounded-md">
             <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>Sign Up here :)</p>

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
                        onChange={changepwd} />
                    
                    <input 
                        className="w-52 border-black border rounded-md p-1 bg-transparent" 
                        type="text" 
                        placeholder="confirm password" />
                    
                    <button 
                    className="w-24 border rounded-md p-1 bg-violet-600"
                    onClick={updateuser}>Sign Up</button>
                    
                    <p>Already have an account? <Link className="underline" to={"/"}>Login</Link></p>
                </div>
            </div>            
        </div>
    )
}

export default Signup