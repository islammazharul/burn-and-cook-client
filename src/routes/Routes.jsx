import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layout/LoginLayout";
import Register from "../pages/Login/Register/Register";
import Login from "../pages/Login/Login/Login";
import Terms from "../pages/Shared/Terms/Terms";
import Main from "../layout/Main";
import ChefLayout from "../layout/ChefLayout";
import Category from "../pages/Home/Category/Category";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Shared/Blog/Blog";


const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to="/category"></Navigate>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'terms',
                element: <Terms></Terms>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'category',
                element: <Main></Main>,
                children: [
                    {
                        path: ':id',
                        element: <Category></Category>,
                        loader: ({ params }) => fetch(`https://localhost:5000/categories/${params.id}`)
                    }
                ]
            },
            {
                path: 'news',
                element: <ChefLayout></ChefLayout>,
                children: [
                    {
                        path: ':id',
                        element: <PrivateRoute></PrivateRoute>,
                        loader: ({ params }) => fetch(`https://localhost:5000/chef/${params.id}`)
                    }
                ]
            }
        ]
    }
])
export default router;