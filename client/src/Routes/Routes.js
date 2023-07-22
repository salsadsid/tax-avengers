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
import AddATeamMember from "../Pages/Dashboard/AddATeamMember/AddATeamMember";
import ManageMembers from "../Pages/Dashboard/ManageMembers/ManageMembers";
import Payment from "../Pages/Dashboard/Payment/Payment";
import DisplayError from "../Pages/Shared/DisplayError/DisplayError";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        errorElement:<DisplayError></DisplayError>,
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
        errorElement:<DisplayError></DisplayError>,
        children:[
            {
                path:"/dashboard",
                element:<MyAppointments></MyAppointments>
            },
            {
                path:"/dashboard/allusers",
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:"/dashboard/addteammember",
                element:<AdminRoute><AddATeamMember></AddATeamMember></AdminRoute>
            },
            {
                path:"/dashboard/managemember",
                element:<AdminRoute><ManageMembers></ManageMembers></AdminRoute>
            },
            {
                path:"/dashboard/payment/:id",
                element:<Payment></Payment>,
                loader:({params})=>fetch(`https://tax-avengers-server.vercel.app/booking/${params.id}`)
            },
        ]
    }
])

export default router;