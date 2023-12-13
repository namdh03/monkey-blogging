import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import slugify from "slugify";
import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Field from "@components/Field";
import Label from "@components/Label";
import Input from "@components/Input";
import Button from "@components/Button";
import Upload from "@components/Upload";
import Radio from "@components/Radio";
import configs from "@configs/index";
import { useUpload } from "@hooks/index";
import { Role, UserStatus } from "@utils/enum";
import { UserType } from "@ts/index";
import Heading from "../Heading";

const AddUser = () => {
    const {
        control,
        setValue,
        getValues,
        handleSubmit,
        watch,
        formState: { isValid, isSubmitting },
    } = useForm<UserType>({
        defaultValues: {
            status: UserStatus.ACTIVE,
            role: Role.USER,
        },
    });
    const { image, progress, onSelectFile, onDelete } = useUpload(
        setValue,
        getValues
    );
    const watchStatus = watch("status");
    const watchRole = watch("role");
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleAddUser = async (values: UserType) => {
        if (!isValid || isSubmitting) return;

        try {
            setLoading(true);

            const colRef = collection(configs.firebase.db, "users");

            await createUserWithEmailAndPassword(
                configs.firebase.auth,
                values.email,
                values.password
            );

            toast.success("Add user successfully!");

            await setDoc(doc(colRef, configs.firebase.auth.currentUser?.uid), {
                fullname: values.fullname,
                email: values.email,
                username: slugify(values.fullname, { lower: true }),
                status: values.status,
                role: values.role,
                createdAt: serverTimestamp(),
                avatar: image,
            });

            navigate(configs.routes.manageUser);
        } catch (error) {
            toast.error((error as Error).message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Heading title="New user" subtitle="Add new user to system" />

            <form onSubmit={handleSubmit(handleAddUser)}>
                <div className="form-layout">
                    <Field>
                        <Label htmlFor="image">Image</Label>
                        <Upload
                            onChange={onSelectFile}
                            progress={progress}
                            image={image}
                            onDelete={onDelete}
                        />
                    </Field>
                </div>

                <div className="form-layout">
                    <Field>
                        <Label htmlFor="fullname">Fullname</Label>
                        <Input
                            type="text"
                            id="fullname"
                            name="fullname"
                            placeholder="Enter your fullname"
                            control={control}
                        />
                    </Field>

                    <Field>
                        <Label htmlFor="username">Username</Label>
                        <Input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your username"
                            control={control}
                        />
                    </Field>
                </div>

                <div className="form-layout">
                    <Field>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            control={control}
                        />
                    </Field>

                    <Field>
                        <Label htmlFor="password">Password</Label>
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            control={control}
                        />
                    </Field>
                </div>

                <div className="form-layout">
                    <Field>
                        <Label htmlFor="status">Status</Label>
                        <Radio
                            name="status"
                            control={control}
                            checked={Number(watchStatus) === UserStatus.ACTIVE}
                            value={UserStatus.ACTIVE}
                        >
                            Active
                        </Radio>
                        <Radio
                            name="status"
                            control={control}
                            checked={
                                Number(watchStatus) === UserStatus.INACTIVE
                            }
                            value={UserStatus.INACTIVE}
                        >
                            Pending
                        </Radio>
                        <Radio
                            name="status"
                            control={control}
                            checked={Number(watchStatus) === UserStatus.BAN}
                            value={UserStatus.BAN}
                        >
                            Banned
                        </Radio>
                    </Field>

                    <Field>
                        <Label htmlFor="role">Role</Label>
                        <Radio
                            name="role"
                            control={control}
                            checked={Number(watchRole) === Role.ADMIN}
                            value={Role.ADMIN}
                        >
                            Admin
                        </Radio>
                        <Radio
                            name="role"
                            control={control}
                            checked={Number(watchRole) === Role.MODERATOR}
                            value={Role.MODERATOR}
                        >
                            Moderator
                        </Radio>
                        <Radio
                            name="role"
                            control={control}
                            checked={Number(watchRole) === Role.EDITOR}
                            value={Role.EDITOR}
                        >
                            Editor
                        </Radio>
                        <Radio
                            name="role"
                            control={control}
                            checked={Number(watchRole) === Role.USER}
                            value={Role.USER}
                        >
                            User
                        </Radio>
                    </Field>
                </div>

                <Button type="submit" isLoading={loading}>
                    Add new user
                </Button>
            </form>
        </div>
    );
};

export default AddUser;
