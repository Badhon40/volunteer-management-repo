import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/error/ErrorPage";
import NeedVolunteer from "../pages/needVolunteer/NeedVolunteer";
import MyProfile from "../pages/myProfile/MyProfile";


const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                index:true,
                element:<Home></Home>

            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/needVolunteer',
                element:<NeedVolunteer></NeedVolunteer>
            },
            {
                path:'/myProfile',
                element:<MyProfile></MyProfile>
            }
        ]
    }

]);


export default Routes;