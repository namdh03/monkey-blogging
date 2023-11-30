import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import eye from "@assets/icons/eye.svg";
import eyeSlash from "@assets/icons/eye-slash.svg";
import Field from "@components/Field";
import Label from "@components/Label";
import Input from "@components/Input";
import Button from "@components/Button";
import configs from "@configs/index";
import { SignUpType } from "@ts/index";
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
            const currentUser = configs.firebase.auth.currentUser;
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

            if (currentUser) {
                await updateProfile(currentUser, {
                    displayName: values.fullname,
                });
            }

            await addDoc(colRef, {
                fullname: values.fullname,
                email: values.email,
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

            <Button type="submit" isLoading={isSubmitting} className="button">
                Sign Up
            </Button>
        </form>
    );
};

export default SignUp;
