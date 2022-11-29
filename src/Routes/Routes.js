import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import CategoryDetail from "../Pages/Category/CategoryDetail";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import MyOrders from "../Pages/Dashboard/Orders/MyOrders";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/Login/Login";
import Payment from "../Pages/Payment/Payment";
import ReportToAdmin from "../Pages/ReportToAdmin/ReportToAdmin";
import DisplayError from "../Pages/SharePage/DisplayError/DisplayError";
import SignUp from "../Pages/SignUp/SignUp";
import AllBuyers from "../Pages/Users/AllBuyers";
import AllSellers from "../Pages/Users/AllSellers";
import AllUser from "../Pages/Users/AllUser";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/itemName/:id',
                element: <CategoryDetail></CategoryDetail>,
                loader: ({ params }) => fetch(`http://localhost:5000/itemName/${params.id}`)
            },
            {
                path: '/reportToAdmin/:id',
                element: <ReportToAdmin></ReportToAdmin>,
                loader: ({ params }) => fetch(`http://localhost:5000/itemName/${params.id}`)
            }

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard/orders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myproduct',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUser></AllUser></AdminRoute>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
        ]
    },
    {
        path: '*',
        element: <div className='text-center text-4xl text-warning m-56 pt-8'>
            <h3> Ops!! Page Not found: 404</h3> <p>You provide a wrong link .</p>
        </div>
    }
])


export default router;