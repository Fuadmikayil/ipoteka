import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Form from "../pages/form";

export const routers  = createBrowserRouter([
    {
        index:true,
        element: <Home/>
    },
    {
        path:"/login",
        element: <Form/>
    }
    
])