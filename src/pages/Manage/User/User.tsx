import Heading from "@pages/Manage/Heading";
import Table from "./components/Table";
import { UserStyled } from "./User.styled";

const User = () => {
    return (
        <UserStyled>
            <Heading title="Users" subtitle="Manage your user" />

            <Table />
        </UserStyled>
    );
};

export default User;
