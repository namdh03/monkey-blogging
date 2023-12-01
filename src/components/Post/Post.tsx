import configs from "@configs/index";
import Category from "@components/Category";
import Title from "@components/Title";
import Meta from "@components/Meta";
import { PostStyled } from "./Post.styled";

const Post = () => {
    return (
        <PostStyled>
            <div className="post-image">
                <img
                    src="https://images.unsplash.com/photo-1570993492881-25240ce854f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2290&q=80"
                    alt=""
                />
            </div>
            <Category
                to={configs.routes.home}
                variant="primary"
                className="post-category"
            >
                Kiến thức
            </Category>
            <Title to={configs.routes.home} className="post-title">
                Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
            </Title>
            <Meta time="Mar 23" author="Andiez Le" className="post-info" />
        </PostStyled>
    );
};

export default Post;
