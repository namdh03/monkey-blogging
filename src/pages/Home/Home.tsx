import { FC } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import configs from "@configs/index";
import useAuth from "@hooks/useAuth";
import { signOut as systemSignOut } from "@contexts/auth/actions";

const Home: FC = () => {
    const { dispatch, user } = useAuth();

    const handleSignOut = () => {
        signOut(configs.firebase.auth);
        dispatch(systemSignOut());
    };

    return user ? (
        <button onClick={handleSignOut}>Sign Out</button>
    ) : (
        <Link to={configs.routes.signIn}>Sign In</Link>
    );
};

export default Home;
