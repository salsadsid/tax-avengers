import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import Login from "../Pages/Login/Login/Login";
import SignUp from "../Pages/SignUp/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import DashboardLayout from "../Layout/DashboardLayout";
import MyAppointments from "../Pages/Dashboard/MyAppointments/MyAppointments";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";

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
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:"/dashboard",
                element:<MyAppointments></MyAppointments>
            },
            {
                path:"/dashboard/allusers",
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
        ]
    }
])

export default router;