import configs from "@configs/index";
import Category from "@components/Category";
import Title from "@components/Title";
import Meta from "@components/Meta";
import Image from "@components/Image";
import { FeatureStyled } from "./Feature.styled";

const Feature = () => {
    return (
        <FeatureStyled>
            <Image url="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80" />
            <div className="post-overlay"></div>
            <div className="post-content">
                <div className="post-top">
                    <Category
                        to={configs.routes.home}
                        variant="primary"
                        className="post-category"
                    >
                        Kiến thức
                    </Category>
                    <Meta
                        time="Mar 23"
                        author="Andiez Le"
                        className="post-info"
                    />
                </div>
                <Title to={configs.routes.home} size="large">
                    Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
                </Title>
            </div>
        </FeatureStyled>
    );
};

export default Feature;
