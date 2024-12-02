import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import PrivateRoute from "../privateRoute";

export const routers  = createBrowserRouter([
    {
        index:true,
        element:<PrivateRoute>
            <Home/>
        </PrivateRoute>
    },
    
])