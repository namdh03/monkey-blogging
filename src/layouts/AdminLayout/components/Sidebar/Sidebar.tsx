import { Link, NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import logo from "@assets/icons/logo.svg";
import dashboardIcon from "@assets/icons/dashboard.svg";
import postIcon from "@assets/icons/post.svg";
import categoryIcon from "@assets/icons/category.svg";
import userIcon from "@assets/icons/user.svg";
import logoutIcon from "@assets/icons/logout.svg";
import configs from "@configs/index";
import { SidebarLinksType } from "@ts/index";
import { useAuth } from "@hooks/index";
import { signOut as systemSignOut } from "@contexts/auth/actions";
import { SidebarStyled } from "./Sidebar.styled";

const Sidebar = () => {
    const navigate = useNavigate();
    const { dispatch } = useAuth();

    const handleSignOut = () => {
        signOut(configs.firebase.auth);
        dispatch(systemSignOut());
        navigate(configs.routes.home);
    };

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
            onclick: handleSignOut,
        },
    ];

    return (
        <SidebarStyled className="sidebar">
            <Link to={configs.routes.dashboard} className="sidebar-logo">
                <img srcSet={logo} alt="Monkey Blogging" />
                <span>Monkey Blogging</span>
            </Link>

            {sidebarLinks.map((link) =>
                link.onclick ? (
                    <div
                        key={link.url}
                        onClick={link.onclick}
                        className="menu-item"
                    >
                        <img src={link.icon} alt="" className="menu-icon" />
                        <span className="menu-text">{link.title}</span>
                    </div>
                ) : (
                    <NavLink key={link.url} to={link.url} className="menu-item">
                        <img src={link.icon} alt="" className="menu-icon" />
                        <span className="menu-text">{link.title}</span>
                    </NavLink>
                )
            )}
        </SidebarStyled>
    );
};

export default Sidebar;
