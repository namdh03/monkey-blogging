import configs from "@configs/index";
import Button from "@components/Button";
import { HeaderStyled } from "./Header.styled";

const Header = () => {
    return (
        <HeaderStyled>
            <Button
                variant="secondary"
                to={configs.routes.addPost}
                className="header-button"
            >
                Write new post
            </Button>
            <div className="header-avatar">
                <img
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
                    alt=""
                />
            </div>
        </HeaderStyled>
    );
};

export default Header;
