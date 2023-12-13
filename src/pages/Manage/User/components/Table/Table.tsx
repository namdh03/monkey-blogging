import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import swal from "sweetalert";
import Table from "@components/Table";
import configs from "@configs/index";
import { UserType } from "@ts/index";
import { Actions } from "@components/Actions";
import Tag from "@components/Tag";
import { Role, UserStatus } from "@utils/enum";
import { TableStyled } from "./Table.styled";

const UserTable = () => {
    const navigate = useNavigate();
    const [userList, setUserList] = useState<UserType[]>([]);

    useEffect(() => {
        const colRef = collection(configs.firebase.db, "users");

        onSnapshot(colRef, (snapshot) => {
            const results: UserType[] = [];

            snapshot.forEach((doc) => {
                results.push({
                    id: doc.id,
                    ...doc.data(),
                } as UserType);
            });

            setUserList(results);
        });
    }, []);

    const renderRoleLabel = (role: Role) => {
        switch (role) {
            case Role.ADMIN:
                return "Admin";
            case Role.MODERATOR:
                return "Moderator";
            case Role.USER:
                return "User";
            case Role.EDITOR:
                return "Editor";

            default:
                break;
        }
    };

    const renderLabelStatus = (status: UserStatus) => {
        switch (status) {
            case UserStatus.ACTIVE:
                return <Tag variant="success">Active</Tag>;
            case UserStatus.INACTIVE:
                return <Tag variant="warning">Pending</Tag>;
            case UserStatus.BAN:
                return <Tag variant="danger">Rejected</Tag>;

            default:
                break;
        }
    };

    const handleDeleteUser = async (user: UserType) => {
        const colRef = doc(configs.firebase.db, "users", user.id);

        const willDelete = await swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete this file?",
            icon: "warning",
            dangerMode: true,
        });

        if (willDelete) {
            try {
                await deleteDoc(colRef);
                toast.success("Delete user successfully");
                swal("Deleted!", "Your file has been deleted.", "success");
            } catch (error) {
                swal("Failed!", "Something went wrong!", "error");
            }
        }
    };

    const renderUserItem = (user: UserType) => {
        return (
            <tr key={user.id}>
                <td title={user.id}>{user.id.slice(0, 5) + "..."}</td>
                <td>
                    <div className="user-info">
                        <img
                            src={user?.avatar}
                            alt=""
                            className="user-avatar"
                        />
                        <div className="flex-1">
                            <h3>{user?.fullname}</h3>
                            <time className="user-date">
                                {new Date().toLocaleDateString("vi-VI")}
                            </time>
                        </div>
                    </div>
                </td>
                <td>{user?.username}</td>
                <td>{user?.email.slice(0, 5) + "..."}</td>
                <td>{renderLabelStatus(Number(user?.status))}</td>
                <td>{renderRoleLabel(Number(user.role))}</td>
                <td>
                    <div className="actions">
                        <Actions.Edit
                            onClick={() =>
                                navigate(
                                    `${configs.routes.updateUser}?id=${user.id}`
                                )
                            }
                        />
                        <Actions.Delete
                            onClick={() => handleDeleteUser(user)}
                        />
                    </div>
                </td>
            </tr>
        );
    };
    return (
        <TableStyled>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Info</th>
                        <th>Username</th>
                        <th>Email address</th>
                        <th>Status</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.length > 0 &&
                        userList.map((user) => renderUserItem(user))}
                </tbody>
            </Table>
        </TableStyled>
    );
};

export default UserTable;
