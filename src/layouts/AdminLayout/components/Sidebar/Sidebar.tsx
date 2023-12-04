import { Link, NavLink } from "react-router-dom";
import logo from "@assets/icons/logo.svg";
import dashboardIcon from "@assets/icons/dashboard.svg";
import postIcon from "@assets/icons/post.svg";
import categoryIcon from "@assets/icons/category.svg";
import userIcon from "@assets/icons/user.svg";
import logoutIcon from "@assets/icons/logout.svg";
import configs from "@configs/index";
import { SidebarLinksType } from "@ts/index";
import { SidebarStyled } from "./Sidebar.styled";

const sidebarLinks: SidebarLinksType[] = [
    {
        title: "Dashboard",
        url: configs.routes.dashboard,
        icon: dashboardIcon,
    },
    {
        title: "Post",
        url: configs.routes.managePost,
        icon: postIcon,
    },
    {
        title: "Category",
        url: configs.routes.manageCategory,
        icon: categoryIcon,
    },
    {
        title: "User",
        url: configs.routes.manageUser,
        icon: userIcon,
    },
    {
        title: "Logout",
        url: configs.routes.home,
        icon: logoutIcon,
    },
];

const Sidebar = () => {
    return (
        <SidebarStyled className="sidebar">
            <Link to={configs.routes.dashboard} className="sidebar-logo">
                <img srcSet={logo} alt="Monkey Blogging" />
                <span>Monkey Blogging</span>
            </Link>

            {sidebarLinks.map((link) => (
                <NavLink key={link.url} to={link.url} className="menu-item">
                    <img src={link.icon} alt="" className="menu-icon" />
                    <span className="menu-text">{link.title}</span>
                </NavLink>
            ))}
        </SidebarStyled>
    );
};

export default Sidebar;
