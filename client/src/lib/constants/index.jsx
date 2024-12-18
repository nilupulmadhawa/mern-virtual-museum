import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineAnnotation,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
} from 'react-icons/hi';

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    path: '/',
    icon: <HiOutlineViewGrid />,
  },
  {
    key: 'Museum',
    label: 'Museum',
    path: '/museummanage',
    icon: <HiOutlineCube />,
  },
  {
    key: 'Shop',
    label: 'Shop',
    path: '/shopmanage',
    icon: <HiOutlineShoppingCart />,
  },
  {
    key: 'customers',
    label: 'Customers',
    path: '/customers',
    icon: <HiOutlineUsers />,
  },
  {
    key: 'Events',
    label: 'Events',
    path: '/eventsmanage',
    icon: <HiOutlineDocumentText />,
  },
  {
    key: 'Blogs',
    label: 'Blogs',
    path: '/blogmanage',
    icon: <HiOutlineAnnotation />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: 'settings',
    label: 'Settings',
    path: '/settings',
    icon: <HiOutlineCog />,
  },
  {
    key: 'support',
    label: 'Help & Support',
    path: '/support',
    icon: <HiOutlineQuestionMarkCircle />,
  },
];
