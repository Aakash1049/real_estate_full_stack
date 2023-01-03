import React from 'react'
import "./propertyNavigation.css"

const PropertyNavigation = ({path}) => {
  console.log(path)
  return (
    <>
  
    <div className='Propertynavigation'>
    <h3 className='add-back'>
    Add New Property
    </h3>
        <ul>
            {path.toLocaleLowerCase() =="/basicinfo" ? <li className='li'><span>1</span> Basic Info</li> :<li><span>1</span> Basic Info</li>}
            {path.toLocaleLowerCase()=="/propertydetail" ? <li className='li'><span>2</span> Property Detail</li> :<li><span>2</span>Property Detail </li>}
            {path.toLocaleLowerCase()=="/generalinfo" ? <li className='li'><span>3</span> General Info</li> :<li><span>3</span>General Info </li>}
            {path.toLocaleLowerCase()=="/locationinfo" ? <li className='li'><span>4</span> Location Info</li> :<li><span>4</span>Location Info </li>}
        </ul>
    </div>
    </>
  )
}

export default PropertyNavigation