import { useForm } from "react-hook-form";
import Heading from "@pages/Manage/Heading";
import Upload from "@components/Upload";
import Field from "@components/Field";
import Label from "@components/Label";
import Input from "@components/Input";
import Button from "@components/Button";
import { ProfileType } from "@ts/index";
import { ProfileStyled } from "./Profile.styled";

const Profile = () => {
    const { control } = useForm<ProfileType>();

    const handleDelete = () => {};

    return (
        <ProfileStyled>
            <Heading
                title="Account information"
                subtitle="Update your account information"
            />

            <form>
                <div className="form__wrapper">
                    <Upload
                        image=""
                        progress={0}
                        onDelete={handleDelete}
                        className="form__upload"
                    />
                </div>

                <div className="form-layout">
                    <Field>
                        <Label htmlFor="fullname">Fullname</Label>
                        <Input
                            type="text"
                            id="fullname"
                            name="fullname"
                            control={control}
                            placeholder="Enter your fullname"
                        />
                    </Field>

                    <Field>
                        <Label htmlFor="username">Username</Label>
                        <Input
                            type="text"
                            id="username"
                            name="username"
                            control={control}
                            placeholder="Enter your username"
                        />
                    </Field>
                </div>

                <div className="form-layout">
                    <Field>
                        <Label htmlFor="birthday">Date of Birth</Label>
                        <Input
                            type="date"
                            id="birthday"
                            name="birthday"
                            control={control}
                            placeholder="dd/mm/yyyy"
                        />
                    </Field>

                    <Field>
                        <Label htmlFor="phone">Mobile Number</Label>
                        <Input
                            type="text"
                            id="phone"
                            name="phone"
                            control={control}
                            placeholder="Enter your phone number"
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
                            control={control}
                            placeholder="Enter your email address"
                        />
                    </Field>
                </div>

                <div className="form-layout">
                    <Field>
                        <Label htmlFor="password">New Password</Label>
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            control={control}
                            placeholder="Enter your password"
                        />
                    </Field>

                    <Field>
                        <Label htmlFor="confirmPassword">
                            Confirm Password
                        </Label>
                        <Input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            control={control}
                            placeholder="Enter your confirm password"
                        />
                    </Field>
                </div>

                <Button variant="primary" className="form__btn">
                    Update
                </Button>
            </form>
        </ProfileStyled>
    );
};

export default Profile;
