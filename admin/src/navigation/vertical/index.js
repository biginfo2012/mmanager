import { Home, User, Users, MessageSquare, Settings } from "react-feather";

export default [
  {
    id: "home",
    title: "Home",
    icon: <Home size={20} />,
    navLink: "/dashboard",
  },
  {
    id: "admins",
    title: "Admins",
    icon: <User size={20} />,
    navLink: "/admin-list",
  },
  {
    id: "users",
    title: "Users",
    icon: <Users size={20} />,
    navLink: "/user-list",
  },
  {
    id: "feedback",
    title: "Feedback",
    icon: <MessageSquare size={20} />,
    navLink: "/feedback",
  },
  {
    id: "settings",
    title: "Settings",
    icon: <Settings size={20} />,
    navLink: "/second-page",
  },
];
