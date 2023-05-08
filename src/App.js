import React, { useState } from "react"
import { Route,Routes } from "react-router-dom";
import Login from "./Components/Login";
import Profile from "./Components/Profile";


const App = ()=>{

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
      </Routes>
    </div>
  );
    
}

export default App;
