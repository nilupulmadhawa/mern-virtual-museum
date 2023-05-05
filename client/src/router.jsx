import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import GuestLayout from "./layout/GuestLayout";


import Login from "./views/Login";
import NotFound from "./views/NotFound";
import Signup from "./views/Signup";
import Home from "./views/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <NotFound />
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            }, {
                path: '/aa',
                element: <NotFound />
            },
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
])

export default router;
