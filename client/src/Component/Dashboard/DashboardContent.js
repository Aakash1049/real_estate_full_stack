import React, { useEffect, useState } from "react";
import "../Dashboard/DashBoardContent.css"
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";
import EachProperty from "./EachProperty";

export default function Content() {
    const navigate = useNavigate();
    const [properties, setProperties] = useState([])
    const [serachResults, setSearchResults] = useState([])
    const [searchText, setSearchtext] = useState("")
    useEffect(() => {
        fetch("/getAllProperties", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        })
            .then(res => res.json())
            .then(data => {
                setProperties(data)

            })
    }, [properties])




    const searchHandler = (e) => {
        setSearchtext(e.target.value)
        const search = e.target.value
        fetch(`/search/${search}`, {
            method: "GET",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setSearchResults(data)
                console.log(serachResults, "is serch reslut")
            })
    }
    return (
        <>
            <SideBar />
        <div id="All-content">
            <div className="content">
                <input id="search" type="text" value={searchText} onChange={(e) => searchHandler(e)} placeholder="Search PPD ID" name="search" />
                <button id="btn" onClick={() => navigate("/Basicinfo")}>+ Add Property</button>



                <table >




                    <tr className="table">
                        <td >PPD ID</td>
                        <td>Image</td>
                        <td>Property</td>
                        <td>Contact</td>
                        <td>Area</td>
                        <td>Views</td>
                        <td>Status</td>
                        <td>Days Left</td>
                        <td>Action</td>
                    </tr>

                    {
                        searchText.length < 1 ?

                            properties.map((property) => {
                                console.log(property)
                                return (
                                    <EachProperty property={property} />
                                )
                            })
                            :
                            serachResults.map((property) => {
                                console.log(property)
                                return (
                                    <EachProperty property={property} />
                                )
                            })
                    }


                </table>
            </div>
            </div>
        </>
    )
}