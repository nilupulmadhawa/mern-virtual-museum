import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import GuestLayout from './layout/GuestLayout';


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

import AboutUs from './components/about/AboutUs';
import ShopCategory from './components/SouvinirShop/ShopCategory';
import ShopViewMagnet from './components/SouvinirShop/ShopViewMagnet';
import SingleItemView from './components/SouvinirShop/SingleItemView';
import ShopViewCards from './components/SouvinirShop/ShopViewCards';
import ShopViewAccessories from './components/SouvinirShop/ShopViewAccessories';
import AdminDashboard from './views/AdminDashboard';
import DashboardLayout from './layout/DashboardLayout';
import MuseumDetailsTable from './components/dashboard/museummanage/MuseumDetailsTable';
import BlogMainPage from './components/dashboard/blogmanage/BlogMainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Home />
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
            path: '/shopcategory',
            element: <ShopCategory />,
          },
          {
            path: '/shopviewmagnet',
            element: <ShopViewMagnet />,
          },
          {
            path: '/shopviewcards',
            element: <ShopViewCards />,
          },
          {
            path: '/shopviewaccessories',
            element: <ShopViewAccessories />,
          },
          {
            path: '/singleitemview',
            element: <SingleItemView />,
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
      path: '/',
      element: <DashboardLayout />,
      children: [
        {
          path: '/dashboard',
          element: <AdminDashboard />,
        },
        {
          path: '/museummanage',
          element: <MuseumDetailsTable />,
        },
        {
          path: '/blogmanage',
          element: <BlogMainPage />,
        },
      ],
    }, 
    {
        path: "*",
        element: <NotFound />
    }
])
export default router;
