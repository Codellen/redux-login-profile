import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Profile() {
    let[userdetails,setUserdetails] = useState({})
    const token = useSelector((state)=>state.data.token)
    const id = useSelector((state)=>state.data.id)
   //console.log(userdetails)

    useEffect(()=>{
        fetch(`https://dummyjson.com/users/${id}`)
        .then((res)=>res.json())
        .then((data)=>{
            setUserdetails(data);
        })

    },[id])
   
    
  return (
    <div>
      <div>
     <h2>Profile Page</h2>

      </div>
      <div>
        <p>{userdetails.firstName}</p>
      </div>
      <div>
        <img src = {userdetails.image}></img>
      </div>
    </div>
  )
}

export default Profile
