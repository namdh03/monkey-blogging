import { FC } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import configs from "@configs/index";
import useAuth from "@hooks/useAuth";
import { signOut as systemSignOut } from "@contexts/auth/actions";
import Banner from "@components/Banner";
import Heading from "@components/Heading";
import Feature from "@components/Feature";
import Newest from "@components/Newest";
import Post from "@components/Post";
import { Section } from "./Home.styled";

const Home: FC = () => {
    const { dispatch, user } = useAuth();

    const handleSignOut = () => {
        signOut(configs.firebase.auth);
        dispatch(systemSignOut());
    };

    return (
        <>
            <div style={{ marginBottom: "10px" }}>
                {user ? (
                    <div>
                        <span>Hello, {user.email} - </span>
                        <Link to={configs.routes.dashboard}>Dashboard -</Link>
                        <button
                            style={{ cursor: "pointer" }}
                            onClick={handleSignOut}
                        >
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <Link to={configs.routes.signIn}>Sign In</Link>
                )}
            </div>

            <Banner />

            <Section>
                <Heading>Bài viết nổi bật</Heading>
                <div className="grid-layout">
                    <Feature />
                    <Feature />
                    <Feature />
                </div>
            </Section>

            <Section>
                <Heading>Mới nhất</Heading>

                <div className="layout">
                    <Newest.Main />
                    <div className="sidebar">
                        <Newest.Item />
                        <Newest.Item />
                        <Newest.Item />
                    </div>
                </div>

                <div className="grid-layout grid-layout--primary">
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </Section>
        </>
    );
};

export default Home;
