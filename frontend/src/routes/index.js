import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Home from "../pages/Home";
import Login from "../pages/Login";
import ForgotPassowrd from "../pages/ForgotPassowrd";
import SignUp from "../pages/SignUp";
import AdminPanel from '../pages/AdminPanel'
import AllUsers from '../pages/AllUsers'
import AllProducts from '../pages/AllProducts'
import CategoryList from "../components/CategoryList";
import ProductDetails from '../pages/ProductDetails'
import NailPolishDetails from "../pages/NailPolishDetails";
import MakeupProductDetails from "../pages/MakeupProductDetails";


const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "/login",
                element : <Login/>
            },
            {
                path : "forgot-password",
                element : <ForgotPassowrd/>
            },
            {
                path : "sign-up",
                element : <SignUp/>
            },
            {
                path : "product-category/:categoryName",
                element : <CategoryList />
            },
            {
                path : "product/:id",
                element : <ProductDetails/>
            },
            { 
                path: "nail-polish/:id",
                 element: <NailPolishDetails /> 
            },
            {
                path: "/makeup-product/:id",
                element : <MakeupProductDetails />
            },
            {
                path : "admin-panel",
                element : <AdminPanel/>,
                children : [
                    {
                        path : "all-users",
                        element : <AllUsers/>
                    },
                    {
                        path : "all-products",
                        element : <AllProducts/>
                    }
                ]
            },
        ]
    }
]);

export default router