import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import Login from "../Pages/Login/Login/Login";
import SignUp from "../Pages/SignUp/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/appointment",
                element:<Appointment></Appointment>
            },
            {
                path:"login",
                element:<Login></Login>
            },
            {
                path:"signup",
                element:<SignUp></SignUp>
            }
        ]
    },
    {
        path:"/dashboard",
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    }
])

export default router;