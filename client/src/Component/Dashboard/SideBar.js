import React from "react";
import { json, useNavigate } from "react-router-dom";
import "../Dashboard/SideBar.css"

export default function SideBar() {
    const user = JSON.parse(localStorage.getItem("user"))
    console.log(user.email)
    const username = user.email.split("@")[0]
    console.log(username)
    const navigate=useNavigate()

    const logOutHandler=()=>{
        console.log("logout called")
        localStorage.clear()
        navigate("/")
    }

    return (
        <>
            <div className="dashboard">


                <div className="side-bar">
                    <h1 className="side-bar-logo">Logo </h1>
                    <section className="opt">
                        <ul>
                            <li id="l-1"><i class="fa-solid fa-house"></i> Property</li>
                            <li><i class="fa-regular fa-bell"></i> Assistance</li>
                            <li><i class="fa-solid fa-download"></i>Recieved Interest</li>
                            <li><i class="fa-solid fa-upload"></i> Sent Interest</li>
                            <li><i class="fa-solid fa-eye"></i> Property Views</li>
                            <li><i class="fa-solid fa-tag"></i> Tariff Plan</li>
                        </ul>
                    </section>
                </div>


                <div className="middle">
                    <nav className="head">
                        <h4>USER ID : 12PPD123</h4>
                        <section>
                            <img id="img-2" src={require("../../Images/person.png")} alt="logo" />
                            {/* <h4 className="username">{username}</h4> */}
                            <select className="username" onChange={()=>logOutHandler()}>
                                <option className="username" selected disabled hidden>{username}</option>
                                <option>Logout</option>
                            </select>
                        </section>
                    </nav>

                </div>
            </div>
        </>
    )
}