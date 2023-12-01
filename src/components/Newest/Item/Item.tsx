import configs from "@configs/index";
import Category from "@components/Category";
import Title from "@components/Title";
import Meta from "@components/Meta";
import { ItemStyled } from "./Item.styled";

const Item = () => {
    return (
        <ItemStyled>
            <div className="post-image">
                <img
                    src="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2294&q=80"
                    alt=""
                />
            </div>
            <div className="post-content">
                <Category to={configs.routes.home} className="post-category">
                    Kiến thức
                </Category>
                <Title
                    to={configs.routes.home}
                    size="small"
                    className="post-title"
                >
                    Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
                </Title>
                <Meta time="Mar 23" author="Andiez Le" className="post-info" />
            </div>
        </ItemStyled>
    );
};

export default Item;
