import { Link, NavLink } from "react-router-dom";
import logo from "@assets/icons/logo.svg";
import search from "@assets/icons/search.svg";
import configs from "@configs/index";
import useAuth from "@hooks/useAuth";
import { NavbarLinksType } from "@ts/index";
import { HeaderStyled } from "./Header.styled";
import Button from "@components/Button";

const navbarLinks: NavbarLinksType[] = [
    {
        path: configs.routes.home,
        name: "Home",
    },
    {
        path: configs.routes.blog,
        name: "Blog",
    },
    {
        path: configs.routes.contact,
        name: "Contact",
    },
];

const Header = () => {
    const { user } = useAuth();

    return (
        <HeaderStyled>
            <Link to={configs.routes.home}>
                <img src={logo} alt="Monkey Blogging" className="logo" />
            </Link>

            <nav className="navbar">
                <ul className="navbar__list">
                    {navbarLinks.map((link) => (
                        <li className="navbar__item" key={link.path}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    `navbar__link ${
                                        isActive ? "navbar__link--active" : ""
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="search">
                <input
                    type="text"
                    placeholder="Search posts..."
                    className="search__input"
                />

                <img src={search} alt="" className="search__icon" />
            </div>

            {user ? (
                <Button variant="secondary" to={configs.routes.dashboard}>
                    Dashboard
                </Button>
            ) : (
                <Button variant="secondary" to={configs.routes.signUp}>
                    Sign Up
                </Button>
            )}
        </HeaderStyled>
    );
};

export default Header;
