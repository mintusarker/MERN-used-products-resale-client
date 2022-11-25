import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import CategoryDetail from "../Pages/Category/CategoryDetail";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
        path: '*',
        element: <div className='text-center text-4xl text-warning m-56 pt-8'>
        <h3> Ops!! Page Not found: 404</h3> <p>You provide a wrong link .</p>
    </div>
    }
])


export default router;