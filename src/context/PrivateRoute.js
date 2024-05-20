import React from 'react';
import { Navigate} from 'react-router-dom';
import { UserAuth } from './UserAuth';

const PrivateRoute = ({children}) =>{
const {user} = UserAuth();
if(!user){
  return <Navigate to='/Login' />
}
return children;
};


export default PrivateRoute