import { LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE, LOGOUT } from "./actionTypes"
import axios from "axios"

export const login=(details)=>{
    return async (dispatch)=>{
        try {
            dispatch({type:LOGIN_REQUEST})
            let res=await axios.post(`https://greenmentor-l03o.onrender.com/auth/login`,details)
            console.log(res.data)
            dispatch({type:LOGIN_SUCCESS,payload:{token:res.data.token,name:res.data.name}})
        } catch (error) {
            dispatch({type:LOGIN_FAILURE})
            
        }
    }
}
export const logout = () => {
  return {
    type: LOGOUT,
  };
};
