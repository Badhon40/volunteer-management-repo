import { useContext } from 'react';
import { AuthContext } from '../../firebaseProvider/FirebaseProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Lottie from "lottie-react";
import Loading from '../../assets/Animation - 1720368541644.json'

const Private = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    if(loading)
        {
            return (<Lottie animationData={Loading} />)
        }
        if(user){
            return <>{children}</>
        }
        else {
            
            return <Navigate to='/login' state={location?.pathname}></Navigate>
        }
};

export default Private;