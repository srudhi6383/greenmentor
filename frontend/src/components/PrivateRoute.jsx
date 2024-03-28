import React from "react";
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {

      const isAuth=useSelector(state=>state.loginReducer.isAuth);
     
      console.log(isAuth);
      if(!isAuth){
       console.log('Redirecting to /login'); 
        return <Navigate to={"/"}/>
      }
      return children;
}

export default PrivateRoute