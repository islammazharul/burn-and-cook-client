import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layout/LoginLayout";
import Register from "../pages/Login/Register/Register";
import Login from "../pages/Login/Login/Login";
import Terms from "../pages/Shared/Terms/Terms";
import Main from "../layout/Main";
import ChefLayout from "../layout/ChefLayout";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Shared/Blog/Blog";
import Error from "../pages/Shared/Error/Error";
import Home from "../pages/Home/Home/Home";
import Test from "../pages/Test/Test";


const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        errorElement: <Error></Error>,
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
                path: 'test/:id',
                element: <PrivateRoute><Test></Test></PrivateRoute>
            },
            {
                path: '/',
                element: <Main></Main>,
                children: [
                    {
                        path: ':id',
                        element: <Home></Home>,
                        loader: ({ params }) => fetch(`https://burn-and-cook-server-islammazharul763-gmailcom.vercel.app/categories/${params.id}`)
                    }
                ]
            },
            {
                // path: 'recipes',
                // element: <ChefLayout></ChefLayout>
            }
        ]
    }
])
export default router;