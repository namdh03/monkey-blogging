import Heading from "@pages/Manage/Heading";
import { useAuth } from "@hooks/index";

const Dashboard = () => {
    const { user } = useAuth();

    return (
        <>
            <Heading title="Dashboard" subtitle="Overview dashboard monitor" />
            <p>{user?.email}</p>
        </>
    );
};

export default Dashboard;
