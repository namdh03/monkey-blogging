import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import swal from "sweetalert";
import slugify from "slugify";
import Field from "@components/Field";
import Label from "@components/Label";
import Input from "@components/Input";
import Radio from "@components/Radio";
import Button from "@components/Button";
import Upload from "@components/Upload";
import configs from "@configs/index";
import useUpload from "@hooks/useUpload";
import { Role, UserStatus } from "@utils/enum";
import { UserType } from "@ts/index";
import Heading from "../Heading";
import { UpdateUserStyled } from "./UpdateUser.styled";

const UpdateUser = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const { handleSubmit, control, watch, reset, setValue, getValues } =
        useForm<UserType>();
    const watchStatus = watch("status");
    const watchRole = watch("role");
    const imageUrl = getValues("avatar");
    const imageRegex = /%2F(\S+)\?/gm.exec(imageUrl);
    const imageName =
        imageRegex && imageRegex?.length > 0 ? imageRegex?.[1] : "";
    const { image, setImage, progress, onSelectFile, onDelete } = useUpload(
        setValue,
        getValues,
        imageName,
        handleDeleteAvatar
    );
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            try {
                if (!id) return null;

                setLoading(true);

                const docRef = doc(configs.firebase.db, "users", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    reset(docSnap.data());
                } else {
                    // docSnap.data() will be undefined in this case
                    console.log("No such document!");
                }
            } catch (error) {
                swal("Failed!", "Something went wrong!", "error");
            } finally {
                setLoading(false);
            }
        })();
    }, [id, reset]);

    useEffect(() => {
        setImage(imageUrl);
    }, [imageUrl, setImage]);

    async function handleDeleteAvatar() {
        if (!id) return null;

        const colRef = doc(configs.firebase.db, "users", id);

        await updateDoc(colRef, {
            avatar: "",
        });
    }

    const handleUpdateUser = async (values: UserType) => {
        try {
            if (!id) return null;

            setLoading(true);

            const colRef = doc(configs.firebase.db, "users", id);

            await updateDoc(colRef, {
                fullname: values.fullname,
                email: values.email,
                username: slugify(values.username || values.fullname, {
                    lower: true,
                }),
                status: values.status,
                role: values.role,
                avatar: image,
            });
            navigate(configs.routes.manageUser);
            toast.success("Update user successfully");
        } catch (error) {
            swal("Failed!", "Something went wrong!", "error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <UpdateUserStyled>
            <Heading title="Update user" subtitle="Update user information" />

            <form onSubmit={handleSubmit(handleUpdateUser)}>
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
                    Update user
                </Button>
            </form>
        </UpdateUserStyled>
    );
};

export default UpdateUser;
