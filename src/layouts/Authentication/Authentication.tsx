import { Outlet } from "react-router-dom";
import logo from "@assets/icons/logo.svg";
import Container from "@components/Container";
import { AuthenticationPageStyled } from "./Authentication.styled";

const Authentication = () => {
    return (
        <Container>
            <AuthenticationPageStyled>
                <img src={logo} alt="Monkey Blogging" className="logo" />
                <h1 className="heading">Monkey Blogging</h1>

                <Outlet />
            </AuthenticationPageStyled>
        </Container>
    );
};

export default Authentication;
