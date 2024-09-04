import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/error/ErrorPage";
import NeedVolunteer from "../pages/needVolunteer/NeedVolunteer";
import MyProfile from "../pages/myProfile/MyProfile";
import AddVolunteerPage from "../pages/addVolunteerPage/AddVolunteerPage";
import ManageMyPost from "../pages/manageMyPost/ManageMyPost";
import Private from "../private/Private";


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
            },
            {
                path:'/add-volunteer-post',
                element:<Private><AddVolunteerPage></AddVolunteerPage></Private>
            },
            {
                path:'/manage-my-post',
                element:<Private><ManageMyPost></ManageMyPost></Private>
            }
        ]
    }

]);


export default Routes;