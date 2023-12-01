import { Outlet } from "react-router-dom";
import Container from "@components/Container";
import Header from "@components/Header";

const MainLayout = () => {
    return (
        <>
            <Container>
                <Header />
                <Outlet />
            </Container>
        </>
    );
};

export default MainLayout;
