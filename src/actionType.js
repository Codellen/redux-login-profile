import { USER_DETAILS,PASSWORD_DETAILS,ID,TOKEN } from "./action";


export const getUser=(userdata)=>{
return{
    type:USER_DETAILS,
    payload:userdata
}
}

export const getPassword = (passdata) => {
  return {
    type: PASSWORD_DETAILS,
    payload: passdata,
  };
};

export const getId = (id) => {
  return {
    type: ID,
    payload: id,
  };
};
export const getToken = (token) => {
  return {
    type: TOKEN,
    payload: token,
  };
};





