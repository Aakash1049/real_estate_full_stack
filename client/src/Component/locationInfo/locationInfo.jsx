import React from 'react'
import "./locationInfo.css"
import SideBar from '../Dashboard/SideBar'
import PropertyNavigation from '../PropertyNavigation/PropertyNavigation'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LocationInfo = ({ user, data, setData }) => {
    const [email,setEmail]=useState(data.email)
    const [city,setCity]=useState(data.city)
    const [area,setArea]=useState(data.area)
    const [pincode, setPincode]=useState(data.pincode);
    const [address,setAdress]=useState(data.address);
    const [landmark,setLandmark]=useState(data.landmark);
    const [lattitude, setLattitude]=useState(data.lattitude);
    const [longitude, setLongitude]=useState(data.longitude);
    const navigate =useNavigate();
    const location = useLocation()
    useEffect(()=>{
        if(!data.email) return

        fetch("/addProperty", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                data
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                }
                else {
                   
                    alert(data.message)
                    navigate("/Content")
                    setData({})
                }
            })

    },[data])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!email || !city || !area || !pincode || !address || !landmark || !lattitude || !longitude){
            alert("all fields are mandatory")
            return
        }
        // console.log("Handle Submit Called");
        try {
            
            // const PPID = parseInt(Math.random() * 10000);
            // const Views = parseInt(Math.random() * 10);
            // const Days = parseInt(Math.random() * 100);
            // let ppi = PPID.toString();
            // ppi = "PPID" + ppi;
            setData(
                {
                    ...data,
                    email,
                    city,
                    area,
                    pincode,
                    address,
                    landmark,
                    lattitude,
                    longitude
                   
                }
            )
            console.log(data, user);
            // navigate('/locationInfo')

        }
        catch (error) {
            alert(error.message, error)
        }



    }







    return (
        <>
                <SideBar />
                <PropertyNavigation path={location.pathname}/>
            <form className='locationInfo'>
                <div className='a'>
                    <div>
                        <label htmlFor="email">Email</label>
                        <br />
                        <input type="email" value={email}  placeholder='Email' onChange={(e)=>setEmail(e.target.value)} id="email" /> <br />
                    </div>
                    <div>
                        <label htmlFor="city">City</label>
                        <br />
                        <input type="text" value={city} onChange={(e)=>setCity(e.target.value)}  id="city" placeholder='Enter your city' /> <br />
                    </div>
                </div>
                <div className='a'>
                    <div>
                        <label htmlFor="area">Area</label>
                        <br />
                        <input type="text" value={area} onChange={(e)=>setArea(e.target.value)} placeholder='Area' id="area" /> <br />
                    </div>
                    <div>
                        <label htmlFor="pincode">Pincode</label>
                        <br />
                        <input type="number" value={pincode} onChange={(e)=>setPincode(e.target.value)}  id="city" placeholder='Enter your Pincode' /> <br />
                    </div>

                </div>
                <div className='a'>
                    <div>
                        <label htmlFor="address">Address</label>
                        <br />
                        <input type="text" value={address} onChange={(e)=>setAdress(e.target.value)} placeholder='Address' id="address" /> <br />
                    </div>
                    <div>
                        <label htmlFor="landmark">Landmark</label>
                        <br />
                        <input type="text" value={landmark} onChange={(e)=>setLandmark(e.target.value)} placeholder='Landmark'  id="landmark" />
                    </div>
                </div>
                <div className='a'>
                    <div>
                        <label htmlFor="lattitude">lattitude</label>
                        <br />
                        <input type="number" value={lattitude} onChange={(e)=>setLattitude(e.target.value)} placeholder='Lattitude' id="lattitude" /> <br />
                    </div>
                    <div>
                        <label htmlFor="longitude">longitude</label>
                        <br />
                        <input type="number" value={longitude} onChange={(e)=>setLongitude(e.target.value)} placeholder='Longitude' id="longitude" />
                    </div>
                </div>
                <div className="buttons">
                
                <button onClick={()=>navigate("/generalInfo")}>Previous</button>
                <button className="SaveBtn" onClick={(e)=>handleSubmit(e)}>Add Property</button>
                </div>
            
            </form>
        </>
    )
}

export default LocationInfo