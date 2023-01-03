import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Component/Dashboard/SideBar";
import PropertyNavigation from "../Component/PropertyNavigation/PropertyNavigation";
import "../Forms/Propertydetail.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';


// Header

const PropertyDetails = ({ user, data, setData }) => {
    const [length, setLength] = useState(data.length);
    const [breadth, setBreadth] = useState(data.breadth);
    // const [totalArea, setTotalArea] = useState("");
    const [areaUnit, setAreaUnit] = useState(data.areaUnit);
    const [bhk, setbhk] = useState(data.bhk);
    const [floors, setFloors] = useState(data.floors);
    const [attached, setAttached]=useState(data.attached);
    const [western, setWestern]=useState(data.western);
    const [furnished, setFurnished] = useState(data.furnished);
    const [lifts, setLifts]=useState(data.lifts);
    const [parking, setParking]=useState(data.parking);
    const [facing, setFacing]=useState(data.facing);
    const [electricity, setElectricity]=useState(data.electricity);
    const navigate =useNavigate();
    let location = useLocation();

    

    // console.log(user, "From Basic Page");
    // console.log(data);

    const calculate =(len, bre)=>{
        const length = parseInt(len);
        const breadth = parseInt(bre);
        const totalArea = parseInt(length*breadth);
        return totalArea;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!length || !breadth || !areaUnit || !bhk || !floors || !attached || !western || !furnished || !lifts || !parking || !facing || !electricity){
            alert("all fields are manadatory")
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
                    length,
                    breadth,
                    totalArea:calculate(length, breadth),
                    areaUnit,
                    bhk,
                    floors,
                    attached,
                    western,
                    furnished,
                    lifts,
                    parking,
                    facing,
                    electricity
                }
            )
            console.log(data, user);
            navigate('/generalInfo')

        }
        catch (error) {
            alert(error.message, error)
        }



    }




    return (
        <div>
            <Sidebar/>
            <PropertyNavigation  path={location.pathname}/>
            <form action="" className="form-basic">


                <div className="form">
                    <div className="form-container1">
                        <h3>Length</h3>
                        <input type="text" id="length" placeholder="Example:1000" className="input" value={length} onChange={(e) => setLength(e.target.value)}>

                        </input>

                        <h3>Total Area</h3>
                        <input type="text" id="area" Placeholder="Example:7500" readonly className="input" reaquired value={String(calculate(length, breadth))===String(NaN)? 0:calculate(length, breadth)}>
                        </input>


                        <h3>No of BHK</h3>
                        <select className="input" id="bhk" placeholder="Select No of BHK" value={bhk} onChange={(e) => setbhk(e.target.value)}>
                            <option hidden value>Select No of BHK</option>
                            <option value={1} >1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>

                        </select>

                        <h3>Attached</h3>
                        <select className="input" id="attached" placeholder="Select Attached" value={attached} onChange={(e) => setAttached(e.target.value)} >
                            <option hidden value>Select attached</option>
                            <option value="Yes">Yes</option>
                            <option value= "No">No</option>
                        </select>

                        <h3>Furnished</h3>
                        <select className="input" id="furnished" placeholder="Select Furnished" value={furnished} onChange={(e) => setFurnished(e.target.value)}>
                            <option hidden value>Select Furnished</option>
                            <option value="Fully Furnished" >Fully Furnished</option>
                            <option value="Semi Furnished">Semi Furnished</option>
                            <option value="None">None</option>
                        </select>

                        <h3>Lift</h3>
                        <select className="input" id="lift" placeholder="Select Lift"  value={lifts} onChange={(e) => setLifts(e.target.value)}>
                            <option hidden value>Select Lift</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>

                        <h3>Facing</h3>
                        <select className="input" id="facing" placeholder="Select Facing" value={facing} onChange={(e) => setFacing(e.target.value)}>
                             <option hidden value>Select Facing</option>
                            <option value="East">East</option>
                            <option value="West">West</option>
                            <option value="South">South</option>
                            <option value="North">North</option>
                        </select>


                    </div>


                    <div className="form-container2">
                        <h3>Breadth</h3>
                        <input type="text" id="breadth" Placeholder="Example:1000" className="input" value={breadth} onChange={(e) => setBreadth(e.target.value)}>

                        </input>

                        <h3>Area Unit</h3>
                        <select className="input" id="unit" placeholder="Area Unit" value={areaUnit} onChange={(e) => setAreaUnit(e.target.value)}>
                            <option hidden value> Area Unit</option>
                            <option value="square meter">Sqaure Meter</option>
                            <option value="square foot">Square Foot</option>
                        </select>


                        <h3>No of Floors</h3>
                        <select className="input" id="floor" placeholder="Select No of Floor" value={floors} onChange={(e) => setFloors(e.target.value)}>
                            <option hidden value> Select No of Floor</option>
                            <option value="Ground" >Ground</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="more than 4">more than 4</option>

                        </select>

                        <h3>Western Toilet</h3>
                        <select className="input" id="toilet" placeholder="Select Western Toilet" value={western} onChange={(e) => setWestern(e.target.value)}>
                            <option hidden value> Select Western Toilet</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>

                        <h3>Car Parking</h3>
                        <select className="input" id="parking" placeholder="Select Car Parking" value={parking} onChange={(e) => setParking(e.target.value)}>
                            <option hidden value> Select Car Parking</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>

                        <h3>Electricity</h3>
                        <select className="input" id="electricity" placeholder="Example: 3 Phase" value={electricity} onChange={(e) => setElectricity(e.target.value)}>
                            <option hidden value> Example: 3 Phase</option>
                            <option value="1 phase">1 Phase</option>
                            <option value="2 phase">2 Phase</option>
                            <option value="3 phase">3 Phase</option>
                            
                        </select>


                    </div>


                </div>

                <div className="buttons">
                <button onClick={()=>navigate("/basicInfo")}> Previous</button>
                <button className="SaveBtn" onClick={(e)=>handleSubmit(e)}> Save & Continue</button>
                </div>
                


            </form>
            

        </div>

    );


}


export default PropertyDetails;
