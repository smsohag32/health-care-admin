import Dashboard from "@/layouts/Dashboard";
import Main from "@/layouts/Main";
import Ambulence from "@/pages/Admin/Ambulence/Ambulence";
import Calendar from "@/pages/Admin/Calendar/Calendar";
import Departments from "@/pages/Admin/Department/Departments";
import Doctors from "@/pages/Admin/Doctors/DoctorList";
import AddEmployee from "@/pages/Admin/Employees/AddEmployee";
import EmployeeProfile from "@/pages/Admin/Employees/EmployeeProfile";
import Employees from "@/pages/Admin/Employees/Employees";
import UserManagement from "@/pages/Admin/UserManagement/UserManagement";
import UserTypes from "@/pages/Admin/UserManagement/UserTypes";
import Login from "@/pages/authentication/Login";
import AdminOverview from "@/pages/DashboardOverview/AdminOverview/AdminOverview";
import Landing from "@/pages/landing/Landing";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Main />,
      children: [
         {
            path: "/",
            element: <Landing />,
         },
         {
            path: "/authentication/login",
            element: <Login />,
         },
      ],
   },
   {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
         {
            path: "/dashboard",
            element: <AdminOverview />,
         },
         {
            path: "/dashboard/departments",
            element: <Departments />
         },
         {
            path: "/dashboard/employee-list",
            element: <Employees />
         },
         {
            path: "/dashboard/employee/:id",
            element: <EmployeeProfile />
         },
         {
            path: "/dashboard/employee/add",
            element: <AddEmployee />
         },

         {
            path: "/dashboard/doctors",
            element: <Doctors />
         },
         {
            path: "/dashboard/user-management",
            element: <UserManagement />
         },

         {
            path: "/dashboard/user-types",
            element: <UserTypes />
         },

         {
            path: "/dashboard/ambulence",
            element: <Ambulence />
         },
         {
            path: "/dashboard/calendar",
            element: <Calendar />
         },
      ],
   },
]);
