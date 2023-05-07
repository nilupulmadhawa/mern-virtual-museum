import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
// import { logout } from '../../actions/auth';
import { useLocation } from 'react-router-dom';
// import { MDBIcon } from 'mdb-react-ui-kit';

const Navbar = ({ logout }) => {
  const location = useLocation();
  console.log(location.pathname);
  const [open, setOpen] = useState(false);
  // const [allpages, setAllPages] = useState([]);
  const [ShowEvent, setShowEvent] = useState(false);
  const [ShowBlog, setShowBlog] = useState(false);
  const [ShowShop, setShowShop] = useState(false);
  const [ShowMuseum, setShowMuseum] = useState(false);

  const logout_user = () => {
    logout();
    // setRedirect(true);
  };
  //   const guestLinksforAdmin = [
  //     { path: "/", label: "Home" },
  //     { path: "/about", label: "About Us" },
  //     { path: "/industry", label: "industry 4.0 technologies" },
  //     { path: "/education", label: "Education" },
  //     { path: "/fablabmakandura", label: "Fablab Makandura" },
  //     { path: "/contactus", label: "Contact Us" },
  //   ];
  //   const classNames = guestLinksforAdmin.map((link) => {
  //     return location.pathname === link.path
  //       ? "flex bg-[#0A4D68] text-white px-4 py-2 rounded-md text-sm font-medium"
  //       : "flex items-center text-sm px-4 py-2 font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:underline transition duration-150 ease-in-out";
  //   });

  const guestLinks = () => (
    <>
      <li className="nav-item text-sm px-1">
        <Link
          to="/"
          className={
            location.pathname === '/'
              ? 'bg-[#0A4D68] text-white px-4 py-2 rounded-md text-sm font-medium '
              : 'text-gray-700 hover:bg-[#F1F6F9] hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
          }
        >
          Home
        </Link>
      </li>
      <div className="relative">
        <button
          className={
            location.pathname === '/create-event' ||
            location.pathname === '/show-all-event'
              ? 'flex bg-[#0A4D68] text-white px-4 py-2 rounded-md text-sm font-medium'
              : 'flex items-center text-sm px-4 py-2 font-medium text-white-700 hover:text-gray-900 focus:outline-none focus:underline transition duration-150 ease-in-out'
          }
          onMouseEnter={() => setShowMuseum(true)}
          onMouseLeave={() => setShowMuseum(false)}
        >
          Museum
          <svg className="ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            'absolute right-0 w-48 rounded-md shadow-lg ' +
            (ShowMuseum ? 'block' : 'hidden')
          }
          onMouseEnter={() => setShowMuseum(true)}
          onMouseLeave={() => setShowMuseum(false)}
        >
          <div className="bg-white rounded-md shadow-xs">
            <Link
              className={
                location.pathname === '/create-event'
                  ? 'block px-4 py-2 text-sm text-gray-700 bg-gray-100 text-blue-900'
                  : 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }
              to="/create-event"
            >
              Create Museum
            </Link>
            <Link
              className={
                location.pathname === '/show-all-event'
                  ? 'block px-4 py-2 text-sm text-gray-700 bg-gray-100 text-gray-900'
                  : 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }
              to="/show-all-event"
            >
              Show All Museum
            </Link>
          </div>
        </div>
      </div>
      <div className="relative">
        <button
          className={
            location.pathname === '/create-event' ||
            location.pathname === '/show-all-event'
              ? 'flex bg-[#0A4D68] text-white px-4 py-2 rounded-md text-sm font-medium'
              : 'flex items-center text-sm px-4 py-2 font-medium text-white-700 hover:text-gray-900 focus:outline-none focus:underline transition duration-150 ease-in-out'
          }
          onMouseEnter={() => setShowShop(true)}
          onMouseLeave={() => setShowShop(false)}
        >
          Souvinir Shop
          <svg className="ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            'absolute right-0 w-48 rounded-md shadow-lg ' +
            (ShowShop ? 'block' : 'hidden')
          }
          onMouseEnter={() => setShowShop(true)}
          onMouseLeave={() => setShowShop(false)}
        >
          <div className="bg-white rounded-md shadow-xs">
            <Link
              className={
                location.pathname === '/create-event'
                  ? 'block px-4 py-2 text-sm text-gray-700 bg-gray-100 text-blue-900'
                  : 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }
              to="/create-event"
            >
              Categories
            </Link>
            <Link
              className={
                location.pathname === '/show-all-event'
                  ? 'block px-4 py-2 text-sm text-gray-700 bg-gray-100 text-gray-900'
                  : 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }
              to="/show-all-event"
            >
              Show All Categories
            </Link>
          </div>
        </div>
      </div>
      <div className="relative">
        <button
          className={
            location.pathname === '/create-event' ||
            location.pathname === '/show-all-event'
              ? 'flex bg-[#0A4D68] text-white px-4 py-2 rounded-md text-sm font-medium'
              : 'flex items-center text-sm px-4 py-2 font-medium text-white-700 hover:text-gray-900 focus:outline-none focus:underline transition duration-150 ease-in-out'
          }
          onMouseEnter={() => setShowEvent(true)}
          onMouseLeave={() => setShowEvent(false)}
        >
          Events
          <svg className="ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            'absolute right-0 w-48 rounded-md shadow-lg ' +
            (ShowEvent ? 'block' : 'hidden')
          }
          onMouseEnter={() => setShowEvent(true)}
          onMouseLeave={() => setShowEvent(false)}
        >
          <div className="bg-white rounded-md shadow-xs">
            <Link
              className={
                location.pathname === '/create-event'
                  ? 'block px-4 py-2 text-sm text-gray-700 bg-gray-100 text-blue-900'
                  : 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }
              to="/create-event"
            >
              Create Event
            </Link>
            <Link
              className={
                location.pathname === '/show-all-event'
                  ? 'block px-4 py-2 text-sm text-gray-700 bg-gray-100 text-gray-900'
                  : 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }
              to="/show-all-event"
            >
              Show All Event
            </Link>
          </div>
        </div>
      </div>
      <div className="relative">
        <button
          className={
            location.pathname === '/create-event' ||
            location.pathname === '/show-all-event'
              ? 'flex bg-[#0A4D68] text-white px-4 py-2 rounded-md text-sm font-medium'
              : 'flex items-center text-sm px-4 py-2 font-medium text-white-700 hover:text-gray-900 focus:outline-none focus:underline transition duration-150 ease-in-out'
          }
          onMouseEnter={() => setShowBlog(true)}
          onMouseLeave={() => setShowBlog(false)}
        >
          Blogs
          <svg className="ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            'absolute right-0 w-48 rounded-md shadow-lg ' +
            (ShowBlog ? 'block' : 'hidden')
          }
          onMouseEnter={() => setShowBlog(true)}
          onMouseLeave={() => setShowBlog(false)}
        >
          <div className="bg-white rounded-md shadow-xs">
            <Link
              className={
                location.pathname === '/blogsview'
                  ? 'block px-4 py-2 text-sm text-gray-700 bg-gray-100 text-blue-900'
                  : 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }
              to="/blogsview"
            >
              Blogs
            </Link>
            <Link
              className={
                location.pathname === '/articlesview'
                  ? 'block px-4 py-2 text-sm text-gray-700 bg-gray-100 text-gray-900'
                  : 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }
              to="/articlesview"
            >
              Articles
            </Link>
          </div>
        </div>
      </div>
      <li className="nav-item text-sm">
        <Link
          className={
            location.pathname === '/signup'
              ? 'bg-[#0A4D68] text-white px-4 py-2 rounded-md text-sm font-medium'
              : 'text-white-700 hover:bg-[#F1F6F9] hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium'
          }
          to="/signup"
        >
          Sign Up
        </Link>
      </li>
      <li className="nav-item text-sm">
        <button
          className="text-white-700 hover:bg-gray-100 hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium"
          onClick={logout_user}
        >
          Logout
        </button>
      </li>
    </>
  );
  const authLinks = () => (
    <>
      <div className="relative">
        <button
          className={
            location.pathname === '/create-event' ||
            location.pathname === '/show-all-event'
              ? 'flex bg-[#0A4D68] text-white px-4 py-2 rounded-md text-sm font-medium'
              : 'flex items-center text-sm px-4 py-2 font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:underline transition duration-150 ease-in-out'
          }
          onMouseEnter={() => setShowEvent(true)}
          onMouseLeave={() => setShowEvent(false)}
        >
          Events
          <svg className="ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            'absolute right-0 w-48 rounded-md shadow-lg ' +
            (ShowEvent ? 'block' : 'hidden')
          }
          onMouseEnter={() => setShowEvent(true)}
          onMouseLeave={() => setShowEvent(false)}
        >
          <div className="bg-white rounded-md shadow-xs">
            <Link
              className={
                location.pathname === '/create-event'
                  ? 'block px-4 py-2 text-sm text-gray-700 bg-gray-100 text-blue-900'
                  : 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }
              to="/create-event"
            >
              Create Event
            </Link>
            <Link
              className={
                location.pathname === '/show-all-event'
                  ? 'block px-4 py-2 text-sm text-gray-700 bg-gray-100 text-gray-900'
                  : 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }
              to="/show-all-event"
            >
              Show All Event
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="relative">
        <button
          className={classNames}
          onMouseEnter={() => setAllPages(true)}
          onMouseLeave={() => setAllPages(false)}
        >
          All Pages
          <svg className="ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            "absolute right-0 w-48 rounded-md shadow-lg " +
            (allpages ? "block" : "hidden")
          }
          onMouseEnter={() => setAllPages(true)}
          onMouseLeave={() => setAllPages(false)}
        >
          <div className="bg-white rounded-md shadow-xs">
            {guestLinksforAdmin.map((link, index) => (
              <Link
                key={index}
                className={
                  location.pathname === link.path
                    ? "block px-4 py-2 text-sm text-gray-700 bg-gray-100 text-blue-900"
                    : "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }
                to={link.path}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div> */}
    </>
  );

  return (
    <>
      <div className="container mx-auto block relative text-white">
        <div className="w-full fixed top-0 left-0">
          <div className="flex flex-wrap items-center justify-between px-1 md:px-10 py-2 md:py-10 bg-dark bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-sm transition duration-300 ease-in-out">
            <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-light">
              <span className="text-3xl text-indigo-600 mr-1 flex-shrink-0">
                <img
                  src="https://dcassetcdn.com/design_img/144127/56522/56522_1851442_144127_image.jpg"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </span>
              <Link to="/">
                <a className="navbar-brand pl-2 font-sans">Virtual Museum</a>
              </Link>
            </div>

            {/* <div
              onClick={() => setOpen(!open)}
              className="text-3xl absolute right-4 item-center cursor-pointer md:hidden"
            >
              <MDBIcon fas icon={open ? 'close' : 'bars'} />
            </div> */}
            <ul
              className={`md:flex md:items-center justify-center md:pb-0 pb-12 absolute md:static md:z-auto z-50 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? 'top-20' : 'top-[-490px]'
              } md:p-0 md:m-0
  `}
              style={{ zIndex: 9999 }} // add this line to set the z-index value
            >
              {/* {isAuthenticated ? authLinks() : guestLinks()} */}
              {guestLinks()}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
