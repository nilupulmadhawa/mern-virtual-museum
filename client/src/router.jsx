import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import GuestLayout from "./layout/GuestLayout";


import Login from "./views/Login";
import NotFound from "./views/NotFound";
import Signup from "./views/Signup";
import Home from "./views/Home";
import BlogsView from "./components/blogs/BlogsView";
import BlogView from "./components/blogs/BlogView";
import ArticlesView from "./components/blogs/ArticlesView";
import BlogsView from "./components/blogs/BlogsView";
import BlogView from "./components/blogs/BlogView";
import ArticlesView from "./components/blogs/ArticlesView";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <AboutUs />,
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

      {
        path: '/eventDetails',
        element: <EventDetails />,
      },
      {
        path: '/newEvents',
        element: <NewEvents />,
      },
      {
        path: '/museumlist',
        element: <MuseumList />,
      },
      {
        path: '/blogsview',
        element: <BlogsView />
    },
    {
        path: '/blogview',
        element: <BlogView />
    },
    {
        path: '/articlesview',
        element: <ArticlesView />
    },
    ],
  },
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/aa',
        element: <NotFound />,
      },
    ],
  },
  {
    path: '/museum',
    element: <Museum />,
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
      {
        path: '/eventsmanage',
        element: <ManageEvent />,
      },
      {
        path: '/shopmanage',
        element: <ShopMainPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
