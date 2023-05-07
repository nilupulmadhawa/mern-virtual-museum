import { createBrowserRouter, Navigate } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import GuestLayout from './layout/GuestLayout';

import Login from './views/Login';
import NotFound from './views/NotFound';
import Signup from './views/Signup';
import Home from './views/Home';
import AboutUs from './components/about/AboutUs';
import ShopCategory from './components/SouvinirShop/ShopCategory';
import ShopViewMagnet from './components/SouvinirShop/ShopViewMagnet';
import SingleItemView from './components/SouvinirShop/SingleItemView';
import ShopViewCards from './components/SouvinirShop/ShopViewCards';
import ShopViewAccessories from './components/SouvinirShop/ShopViewAccessories';
import AdminDashboard from './views/AdminDashboard';
import DashboardLayout from './layout/DashboardLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
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
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        path: '/dashboard',
        element: <AdminDashboard />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
