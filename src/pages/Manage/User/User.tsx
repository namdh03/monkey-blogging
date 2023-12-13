import Heading from "@pages/Manage/Heading";
import Button from "@components/Button";
import configs from "@configs/index";
import Table from "./components/Table";
import { UserStyled } from "./User.styled";

const User = () => {
    return (
        <UserStyled>
            <Heading title="Users" subtitle="Manage your user">
                <Button to={configs.routes.addUser}>Add new user</Button>
            </Heading>

            <Table />
        </UserStyled>
    );
};

export default User;
