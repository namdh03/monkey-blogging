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

    return (
        <div>
            {user ? (
                <div>
                    <span>Hello, {user.email}</span>
                    <button onClick={handleSignOut}>Sign Out</button>
                </div>
            ) : (
                <Link to={configs.routes.signIn}>Sign In</Link>
            )}
        </div>
    );
};

export default Home;
