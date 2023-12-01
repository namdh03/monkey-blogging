import { FeatureStyled } from "./Feature.styled";

const Feature = () => {
    return (
        <FeatureStyled>
            <img
                src="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80"
                alt="unsplash"
                className="post-image"
            />
            <div className="post-overlay"></div>
            <div className="post-content">
                <div className="post-top">
                    <span className="post-category">Kiến thức</span>
                    <div className="post-info">
                        <span className="post-time">Mar 23</span>
                        <span className="post-dot"></span>
                        <span className="post-author">Andiez Le</span>
                    </div>
                </div>
                <h3 className="post-title">
                    Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
                </h3>
            </div>
        </FeatureStyled>
    );
};

export default Feature;
