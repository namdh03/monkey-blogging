import { Link, NavLink } from "react-router-dom";
import logo from "@assets/icons/logo.svg";
import search from "@assets/icons/search.svg";
import configs from "@configs/index";
import { ButtonStyled, HeaderStyled } from "./Header.styled";

const navbarLinks = [
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

            <ButtonStyled>Sign Up</ButtonStyled>
        </HeaderStyled>
    );
};

export default Header;
