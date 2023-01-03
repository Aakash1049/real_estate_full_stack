import React, { useState } from 'react'
import Swal from 'sweetalert2'

const EachProperty = ({ property }) => {

    const [view, setView] = useState(false)
    const [showImage, setShowImage]=useState(false)
    const saletypeHandler = (e, PPDID) => {
        console.log(e.target.value)
        e.preventDefault()

        fetch(`/updateProperty/${PPDID}`, {
            method: "PUT",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json()).then(data => {
            alert(data.message)
        })


    }

    return (
        <>


            <tr className="table-data">
                <td>{property.PPDID}</td>
                <td><i  class="fa-regular fa-images" style={{color:"#DFDFDF"}}  onClick={()=>setShowImage(!showImage)}></i></td>
                {
                    showImage?
                    Swal.fire({
                        imageUrl: property.photo,
                        imageHeight: 300,
                        imageWidth:300,
                        imageAlt: 'image'
                         
                      },setShowImage(false))
                      
                      :
                      ""
                }
                <td>{property.propertyType}</td>
                <td>{property.mobile}</td>
                <td>{property.totalArea}</td>
                <td>{property.Views}</td>
                <td><button id="btt-1" onClick={(e) => saletypeHandler(e, property.PPDID)} value={property.saleType}>{property.saleType}</button></td>
                <td>{property.Days}</td>
                <td><i class="fa-solid fa-eye" style={{color:"#DFDFDF"}} onClick={() => setView(!view)}></i> <i class="fa-solid fa-pen" style={{color:"#DFDFDF"}} ></i></td>

            </tr>
            {view ?
                Swal.fire({
                    title: "<b>More Info</b>", 
                    html: `<b>Name</b>: ${property.name}</br>
                            <b>Email</b>: ${property.email}</br>
                            <b>City</b>: ${property.city}</br>`,  
                    confirmButtonText: "<b>Close</b>", 
                  },setView(false))

                : ""
            }

        </>

    )
}

export default EachProperty