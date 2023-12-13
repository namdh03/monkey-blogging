import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import slugify from "slugify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import eye from "@assets/icons/eye.svg";
import eyeSlash from "@assets/icons/eye-slash.svg";
import Field from "@components/Field";
import Label from "@components/Label";
import Input from "@components/Input";
import Button from "@components/Button";
import configs from "@configs/index";
import { SignUpType } from "@ts/index";
import { Role, UserStatus } from "@utils/enum";
import schema from "./SignUp.schema";

const SignUp: FC = () => {
    const {
        control,
        handleSubmit,
        formState: { isValid, isSubmitting, errors },
    } = useForm<SignUpType>({ resolver: yupResolver(schema) });
    const [togglePassword, setTogglePassword] = useState<boolean>(false);

    useEffect(() => {
        const arrErrs = Object.values(errors);

        if (arrErrs.length > 0) {
            toast.error(arrErrs[0].message, {
                delay: 0,
                pauseOnHover: false,
            });
        }
    }, [errors]);

    const handleSignUp = async (values: SignUpType) => {
        if (!isValid || isSubmitting) return;

        try {
            const colRef = collection(configs.firebase.db, "users");

            await createUserWithEmailAndPassword(
                configs.firebase.auth,
                values.email,
                values.password
            );

            toast.success("Sign up successfully", {
                delay: 0,
                pauseOnHover: false,
            });

            await setDoc(doc(colRef, configs.firebase.auth.currentUser?.uid), {
                fullname: values.fullname,
                email: values.email,
                username: slugify(values.fullname, { lower: true }),
                status: UserStatus.ACTIVE,
                role: Role.USER,
                createdAt: serverTimestamp(),
                avatar: "https://static2-images.vnncdn.net/files/publish/2022/12/8/meo-1-1416.jpg",
            });
        } catch (error) {
            toast.error((error as Error).message, {
                delay: 0,
                pauseOnHover: false,
            });
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit(handleSignUp)}>
            <Field>
                <Label htmlFor="fullname">Fullname</Label>
                <Input
                    type="text"
                    name="fullname"
                    id="fullname"
                    placeholder="Please enter your fullname"
                    control={control}
                />
            </Field>

            <Field>
                <Label htmlFor="email">Email address</Label>
                <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Please enter your email address"
                    control={control}
                />
            </Field>

            <Field>
                <Label htmlFor="password">Password</Label>
                <Input
                    type={togglePassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Please enter your password"
                    control={control}
                    icon={{
                        src: togglePassword ? eye : eyeSlash,
                        onClick: () => setTogglePassword(!togglePassword),
                    }}
                />
            </Field>

            <span className="question">
                {`Already have an account? `}
                <Link to={configs.routes.signIn}>Sign in</Link>
            </span>

            <Button
                variant="primary"
                type="submit"
                isLoading={isSubmitting}
                className="button"
            >
                Sign Up
            </Button>
        </form>
    );
};

export default SignUp;
