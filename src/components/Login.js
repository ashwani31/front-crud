import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
const Login = () =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate("/")
        }
    },[])
    const handleLogin = async () =>{
        let result = await fetch("http://localhost:4000/login",{
        method:'post',
        body:JSON.stringify({email,password}),
        header: {
            'Content-Type': 'application/json'
        }
        });
        result = await result.json();
        console.warn(result)
        if(result.name)
        {
            localStorage.setItem('user',JSON.stringify(result));
            navigate("/")
        }else{
            alert("please enter correct details")
        }
        
    }
    return(
        <diV className="login">
            <h1>Login</h1>
            <input className="inputBox" type="text" placeholder="Enter Email" 
            onChange={(e) =>setEmail(e.target.value)} value = {email}/>
            <input className="inputBox" type="password" placeholder="Enter Password"
            onChange={(e) =>setPassword(e.target.value)} value = {password} />
            <button onClick={handleLogin} className="appButton" type="button">Login</button>

        </diV>
    )
}

export default Login