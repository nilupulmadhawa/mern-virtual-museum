import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Sidebar from '../components/dashboard/shared/Sidebar';
import Header from '../components/dashboard/shared/Header';
import { useStateContext } from '../context/ContextProvider';

export default function DashboardLayout() {
    const { user, token } = useStateContext();

    if (!token) {
        return <Navigate to="/" />;
    }

    return (
        <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Header />
                <div className="flex-1 p-4 min-h-0 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
