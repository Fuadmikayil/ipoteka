import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home";

export const routers  = createBrowserRouter([
    {
        index:true,
        element:<Home/>
    },
    
])