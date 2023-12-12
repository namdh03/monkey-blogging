import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import Table from "@components/Table";
import configs from "@configs/index";
import { UserType } from "@ts/index";
import { Actions } from "@components/Actions";
import { TableStyled } from "./Table.styled";

const UserTable = () => {
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

    // const renderRoleLabel = (role) => {
    //     switch (role) {
    //         case userRole.ADMIN:
    //             return "Admin";
    //         case userRole.MOD:
    //             return "Moderator";
    //         case userRole.USER:
    //             return "User";

    //         default:
    //             break;
    //     }
    // };

    // const renderLabelStatus = (status) => {
    //     switch (status) {
    //         case userStatus.ACTIVE:
    //             return <LabelStatus type="success">Active</LabelStatus>;
    //         case userStatus.PENDING:
    //             return <LabelStatus type="warning">Pending</LabelStatus>;
    //         case userStatus.BAN:
    //             return <LabelStatus type="danger">Rejected</LabelStatus>;

    //         default:
    //             break;
    //     }
    // };

    // const handleDeleteUser = async (user) => {
    //     const colRef = doc(db, "users", user.id);
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!",
    //     }).then(async (result) => {
    //         if (result.isConfirmed) {
    //             await deleteDoc(colRef);
    //             await deleteUser(user);
    //             toast.success("Delete user successfully");
    //             Swal.fire("Deleted!", "Your file has been deleted.", "success");
    //         }
    //     });
    // };

    const renderUserItem = (user: UserType) => {
        return (
            <tr key={user.id}>
                <td title={user.id}>{user.id.slice(0, 5) + "..."}</td>
                <td className="whitespace-nowrap">
                    <div className="user-info">
                        <img
                            src={user?.avatar}
                            alt=""
                            className="user-avatar"
                        />
                        <div className="flex-1">
                            <h3>{user?.fullname}</h3>
                            <time className="user-date">
                                {new Date(
                                    user?.createdAt?.seconds * 1000
                                ).toLocaleDateString("vi-VI")}
                            </time>
                        </div>
                    </div>
                </td>
                <td>{user?.username}</td>
                <td>{user?.email.slice(0, 5) + "..."}</td>
                {/* <td>{renderLabelStatus(Number(user?.status))}</td> */}
                {/* <td>{renderRoleLabel(Number(user.role))}</td> */}
                <td>
                    <div className="actions">
                        <Actions.Edit />
                        <Actions.Delete />
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
