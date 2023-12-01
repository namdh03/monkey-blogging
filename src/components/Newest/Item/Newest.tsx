import { NewestStyled } from "./Newest.styled";

const Newest = () => {
    return (
        <NewestStyled>
            <div className="post-image">
                <img
                    src="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2294&q=80"
                    alt=""
                />
            </div>
            <div className="post-content">
                <span className="post-category">Kiến thức</span>
                <h3 className="post-title">
                    Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
                </h3>
                <div className="post-info">
                    <span className="post-time">Mar 23</span>
                    <span className="post-dot"></span>
                    <span className="post-author">Andiez Le</span>
                </div>
            </div>
        </NewestStyled>
    );
};

export default Newest;
