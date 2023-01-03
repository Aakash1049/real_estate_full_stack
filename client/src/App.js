
import './App.css';
import Signup from './Component/Signup/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './Component/Signin/Signin';
import SideBar from './Component/Dashboard/SideBar';
import Content from './Component/Dashboard/DashboardContent';
import GeneralInfo from './Component/General Info/generalInfo'
import LocationInfo from './Component/locationInfo/locationInfo'
import Basic from "./Forms/Basicinfo"
import PropertyDetails from "./Forms/Propertydetail"
import { useState } from 'react';


function App() {
  const [user, setUser]= useState({
    // UserID: localStorage.getItem("UserID"),
    // UserName: localStorage.getItem("UserName"),
    jwt:localStorage.getItem("jwt"),
    user:localStorage.getItem("user"),

  });
  
  
  const [data, setData] = useState({
    PPID: "NA",
    Property: "NA",
    Area: "na",
    Contact: "na",
    Views: 0,
    Days: 0,
  });
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin setUser={setUser}/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
        <Route path='/SideBar' element={<SideBar/>}/>
        <Route path='/Content' element={<Content user={user}/>}/>
        <Route path='/generalInfo' element={<GeneralInfo  user={user} data={data} setData={setData} />}/>
        <Route path='/locationInfo' element={<LocationInfo user={user} data={data} setData={setData}/>}/>
        <Route path='/Basicinfo' element={<Basic user={user} data={data} setData={setData}/>}/>
        <Route path='/Propertydetail' element={<PropertyDetails user={user} data={data} setData={setData}/>}/>


      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
