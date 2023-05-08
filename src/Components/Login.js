import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getId,getToken, getUser,getPassword } from "../actionType";

const Login= ()=>{
let [username, setUsername] = useState("");
let [password, setPassword] = useState("");
const dispatch = useDispatch();
const navigate = useNavigate();


function data() {
    
    
  fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: `${username}`,
      password: `${password}`,
    })
  })
    .then((res) => res.json())
    .then( data=>{
      dispatch(getUser(username));
      //console.log(username);
      dispatch(getPassword(password));
      //console.log(password);
      dispatch(getToken(data.token));
      //console.log(data.token);
      dispatch(getId(data.id));
      //console.log(data.id);
      navigate("/profile");
    }
   

    );
}


    return(
        <div>
      <div>
        <input
          type="text"
          placeholder="Username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          value={username}
        ></input>
        <input
          type="password"
          placeholder="Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          value={password}
        ></input>
      </div>
      <div>
        <button onClick={data}>Log in </button>
      </div>
    </div>
  )
    
}
export default Login