import React, { useContext } from "react";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Link, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import useAdmin from "../hook/useAdmin";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

  const location=useLocation()
  
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="dashboard" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 md:bg-inherit  text-base-content">
            <li>
              <Link to="/dashboard">My Appointments</Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allusers">All Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/addteammember">Add A Team Member</Link>
                </li>
                <li>
                  <Link to="/dashboard/managemember">Manage Members</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
