import { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
// import Lottie from "lottie-react";
// import Loading from '../../assets/Animation - 1720368541644.json'

const Private = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    if(loading)
        {
            // return (<Lottie animationData={Loading} />)
            return <div>Loading</div>
        }
        if(user){
            return <>{children}</>
        }
        else {
            
            return <Navigate to='/login' state={location?.pathname}></Navigate>
        }
};

export default Private;