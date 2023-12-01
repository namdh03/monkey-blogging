import { Outlet } from "react-router-dom";
import Container from "@components/Container";
import Header from "@layouts/Header";

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
