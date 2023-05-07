import { Link, Navigate, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon,
} from '@fortawesome/fontawesome-svg-core/import.macro';
// import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';

// import { useAuthContext } from "../context/AuthContext";

export default function DefaultLayout() {
  // const { user, token, setUser, setToken } = useAuthContext();
  // if (!token) {
  //     return <Navigate to="/login" />
  // }

  const onLogout = (e) => {
    e.preventDefault();
    // setUser(null)
    // setToken(null)
    window.location.reload();
  };

  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
}
