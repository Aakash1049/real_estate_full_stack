import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Component/Dashboard/SideBar";
import "../Forms/Basicinfo.css";
import PropertyNavigation from "../Component/PropertyNavigation/PropertyNavigation";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

// Header

const Basic = ({ user, data, setData }) => {
    const [propertyType, setPropertyType] = useState(data.propertyType);
    const [negotialble, setNegotialble] = useState(data.negotialble);
    const [price, setPrice] = useState(data.price);
    const [ownership, setOwnership] = useState(data.ownership);
    const [propertyAge, setPropertyAge] = useState(data.propertyAge);
    const [propertyApprove, setPropertyApprove] = useState(data.propertyApprove);
    const [description, setDescription] = useState(data.description);
    const [bankLoan, setBankLoan] = useState(data.bankLoan);
    let location = useLocation();
    const navigate =useNavigate();

    // console.log(location.pathname);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(propertyAge,propertyType,price,negotialble,description,bankLoan,ownership,propertyApprove)
        if(!propertyType || !negotialble || !price || !ownership || !propertyAge ||!propertyApprove || !description || !bankLoan){
            alert("all fields  are mandatory")
            return
        }
        console.log("Handle Submit Called");
        console.log(description, typeof(data.description))

        try {
            
            // const PPID = parseInt(Math.random() * 10000);
            const Views = parseInt(Math.random() * 10);
            const Days = parseInt(Math.random() * 100);
            // let ppi = PPID.toString();
            // ppi = "PPID" + ppi;
            setData(
                {
                    ...data,
                    propertyType,
                    propertyAge,
                    propertyApprove,
                    bankLoan,
                    ownership,
                    price,
                    negotialble,
                    description,
                    // PPID: ppi,
                    Views: Views,
                    Days: Days
                }
            )
            // console.log(data,user);
            console.log(typeof(data.description))
            navigate('/Propertydetail')

        }
        catch (error) {
            alert(error.message, error)
        }



    }

    return (
        <div>
            <Sidebar />
            <PropertyNavigation path={location.pathname}  className="basicInfo-Nav"/>

            <form action="" style={{backgroundColor: "white"}} className="form-basicinfo" >


                <div className="form">
                    <div className="form-container1">
                        <h3>Property Type</h3>
                        <select className="input" id="Property" required value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
                            <option hidden value>Select Property Type</option>
                            
                            <option value="Home">Home </option>
                            <option value="Plot">Plot </option>
                            <option value="Flat">Flat </option>
                        </select>

                        <h3>Price</h3>
                        <input type="text" id="Price" placeholder="E.g.100000" className="input" value={price} onChange={(e) => setPrice(e.target.value)}>
                        </input>


                        <h3>Property Age</h3>
                        <select className="input" id="Type" placeholder="Select Property Age" value={propertyAge} onChange={(e) => setPropertyAge(e.target.value)}>
                            {/* <option selected disabled hidden> Select Property Age</option> */}
                            <option hidden value>Select Property Age</option>
                            <option value="Below 25 years">Below 25 years</option>
                            <option value="Above 25 years">Above 25 years</option>

                        </select>

                        <h3>Property Description</h3>
                        <input type="text" id="desc" placeholder="Enter the Description" className="input" value={description} onChange={(e) => setDescription(e.target.value)}>

                        </input>
                    </div>


                    <div className="form-container2">
                        <h3>Negotiable</h3>
                        <select type="text" id="nego" placeholder="Select Negotiable" className="input" value={negotialble} onChange={(e) => setNegotialble(e.target.value)}>
                            {/* <option selected disabled hidden>Select Negotiable</option> */}
                            <option hidden value>Select Negotiable</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>

                        </select>

                        <h3>Ownership</h3>
                        <select type="text" id="own" placeholder="Select Ownership" className="input" value={ownership} onChange={(e) => setOwnership(e.target.value)}>
                            {/* <option selected disabled hidden> Select Ownership </option> */}
                            <option hidden value>Select Ownership</option>
                            <option value="Individual">Individual</option>
                            <option value="Joint">Joint</option>

                        </select>

                        <h3>Property Approved</h3>
                        <select type="text" id="approve" placeholder="Property Approved" className="input" value={propertyApprove} onChange={(e) => setPropertyApprove(e.target.value)} >
                            {/* <option selected disabled hidden> Property Approved</option> */}
                            <option hidden value>Property Approved</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>

                        </select>

                        <h3>Bank Loan</h3>
                        <select type="text" id="loan" placeholder="Bank Loan" className="input" value={bankLoan} onChange={(e) => setBankLoan(e.target.value)}>
                            {/* <option selected disabled hidden>Bank Loan</option> */}
                            <option hidden value>Bank Loan</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>

                        </select>


                    </div>


                </div>
                <div className="buttons">
                    <Link to="/Content">
                    <button> Cancel</button>
                    </Link>
                    <Link to="/Propertydetail">
                        <button className="SaveBtn" onClick={(e)=>handleSubmit(e)}> Save & Continue</button>
                    </Link>
                </div>


            </form>

        </div>

    );


}


export default Basic;
