import { Link, Outlet } from "react-router-dom";
import logo from "@assets/icons/logo.svg";
import Container from "@components/Container";
import configs from "@configs/index";
import { AuthenticationPageStyled } from "./Authentication.styled";

const Authentication = () => {
    return (
        <Container>
            <AuthenticationPageStyled>
                <Link to={configs.routes.home}>
                    <img src={logo} alt="Monkey Blogging" className="logo" />
                    <h1 className="heading">Monkey Blogging</h1>
                </Link>

                <Outlet />
            </AuthenticationPageStyled>
        </Container>
    );
};

export default Authentication;
