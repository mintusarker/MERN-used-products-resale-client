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
import DisplayError from "../Pages/SharePage/DisplayError/DisplayError";
import SignUp from "../Pages/SignUp/SignUp";
import AllUser from "../Pages/Users/AllUser";
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
            // {
            //     path: '/dashboard/payment/:id',
            //     element: <Payment></Payment>,
            //     loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
            // },
            {
                path: '/dashboard/allusers',
                element: <AllUser></AllUser>
            }
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