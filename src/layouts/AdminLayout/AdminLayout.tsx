import { Outlet } from "react-router-dom";
import Container from "@components/Container";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { DashboardStyled } from "./AdminLayout.styled";

const AdminLayout = () => {
    return (
        <DashboardStyled>
            <Header />
            <div className="dashboard-main">
                <Sidebar />

                <div className="dashboard-children">
                    <Container>
                        <Outlet />
                    </Container>
                </div>
            </div>
        </DashboardStyled>
    );
};

export default AdminLayout;
