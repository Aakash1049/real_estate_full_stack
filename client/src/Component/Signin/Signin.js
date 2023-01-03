import React, { useState } from "react";
import {  Link } from "react-router-dom";
import "../Signin/Signin.css"
import { useNavigate } from "react-router-dom";


export default function Signin()
{
  const navigate =useNavigate()
  const [email,setEmail] = useState("")
  const [password,SetPassword] = useState("")
  const SignInHandler = (e) => {
    e.preventDefault()
    console.log(email, password)
    fetch("/signIn", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            email, password
        })
    }).then(res => res.json())
        .then(data => {
            if (data.error) {
                alert(data.error)
            }
            else {
                localStorage.setItem("jwt",data.token)
                localStorage.setItem("user",JSON.stringify(data.user))
                alert(data.message)
                navigate("/Content")
            }
        })
}

    return (
        <>
         <div  className='container'>
        <div className='main'>
      <section className='logo'>
        {/* <img  id="log" src={require("../../Images/logo.jpg")} alt='logo'/> */}
       <h1>Logo</h1>
        </section> 
        <h2>Enter your credentials to access your account</h2> 

        <div className='email'>
            <input id="em" type="email"  placeholder='User Id' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>  
            <div className='pwd'>
            <input  id="pw" type="Password"  placeholder="Password"  name='password' value={password} onChange={(e)=>SetPassword(e.target.value)}/>
            </div> 
          
            <div className='btn'>
               <button id="bt" onClick={(e)=>SignInHandler(e)}>Sign in</button>
            </div>
            <Link to="/Signup" >Sign Up</Link>
          </div>
         <h3>Don’t have an account?<Link to="/Signup" >Sign Up</Link></h3>
         </div>
        </>
    )
}