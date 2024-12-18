import { createBrowserRouter } from 'react-router-dom';
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
import MuseumDetailsTable from './components/dashboard/museummanage/MuseumDetailsTable';
import BlogMainPage from './components/dashboard/blogmanage/BlogMainPage';

import EventDetails from './views/EventDetails';
import NewEvents from './views/NewEvents';
import ManageEvent from './components/dashboard/eventmanage/ManageEvent';
import ShopMainPage from './components/dashboard/shopmanage/ShopMainPage';
import ArticlesView from './components/blogs/ArticlesView';
import BlogsView from './components/blogs/BlogsView';
import BlogView from './components/blogs/BlogView';
import MuseumList from './components/MuseumList';
import Museum from './components/Museum';

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
                path: '/shopview/:cat',
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
                path: '/newEvents/:id',
                element: <NewEvents />,
            },
            {
                path: '/blogsview',
                element: <BlogsView />,
            },
            {
                path: '/blogview',
                element: <BlogView />,
            },
            {
                path: '/articlesview',
                element: <ArticlesView />,
            },

            {
                path: '/museumlist',
                element: <MuseumList />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/signup',
                element: <Signup />,
            },
        ],
    },
    {
        path: '/museum/:id',
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
