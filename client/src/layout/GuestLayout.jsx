import { Navigate, Outlet } from "react-router-dom";
// import { useAuthContext } from "../context/AuthContext";

export default function GuestLayout() {
    // const { user, token } = useAuthContext();

    // if (token) {
    //     return <Navigate to="/" />;
    // }

    return (
        <div className="flex flex-row w-full h-screen">
            <h1>GuestLayout</h1>

            <Outlet />

            
        </div>
    );
}
