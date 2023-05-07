import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import GuestLayout from "./layout/GuestLayout";


import Login from "./views/Login";
import NotFound from "./views/NotFound";
import Signup from "./views/Signup";
import Home from "./views/Home";
import AddEvent from "./views/AddEvent";
import Events from "./views/Events";
import ManageEvent from "./views/ManageEvent";
import UpdateEvent from "./views/UpdateEvent";
import EventDetails from "./views/EventDetails";
import NewEvents from "./views/NewEvents";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Home />
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
            },
           
        ]
    },
    {
        path: '/addevent',
        element: <AddEvent />
    },
    {
        path: '/Events',
        element: <Events />
    },
    {
        path: '/manageEvent',
        element: <ManageEvent />
    },
    {
        path: '/updateEvent',
        element: <UpdateEvent />
    },
    {
        path: '/eventDetails',
        element: <EventDetails />
    },
    {
        path: '/newEvents',
        element: <NewEvents />
    },
    {
        path: "*",
        element: <NotFound />
    }
])

export default router;
