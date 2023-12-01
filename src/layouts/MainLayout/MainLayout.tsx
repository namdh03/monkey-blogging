import { Outlet } from "react-router-dom";
import Container from "@components/Container";
import Header from "./components/Header";

const MainLayout = () => {
    return (
        <>
            <Container>
                <Header />

                <main style={{ paddingBottom: "100px" }}>
                    <Outlet />
                </main>
            </Container>
        </>
    );
};

export default MainLayout;
