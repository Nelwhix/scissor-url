import { createBrowserRouter } from "react-router-dom"
import Register from "./pages/Register"
import Index from "./pages/Index"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Index />
    },
    // {
    //     path: "/login",
    //     element: <Login />
    // },
    {
        path: '/register',
        element: <Register />
    }
])

export default router