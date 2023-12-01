import { Link } from "react-router-dom";
import logo from "@assets/icons/logo.svg";
import configs from "@configs/index";
import Button from "@components/Button";
import { NotFoundStyled } from "./NotFound.styled";

const NotFound = () => {
    return (
        <NotFoundStyled>
            <Link to={configs.routes.home}>
                <img src={logo} alt="Monkey Blogging" />
            </Link>

            <h1 className="title">Oops! Page not found</h1>

            <Button to={configs.routes.home}>Back to home</Button>
        </NotFoundStyled>
    );
};

export default NotFound;
