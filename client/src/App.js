import React from 'react'
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { ContextProvider } from './context/ContextProvider.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/index.css';

function App() {

    return (
        <ContextProvider>
            <ToastContainer />
            <RouterProvider router={router} />
        </ContextProvider>
    );
}

export default App;
