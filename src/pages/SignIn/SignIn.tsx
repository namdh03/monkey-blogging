import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import eye from "@assets/icons/eye.svg";
import eyeSlash from "@assets/icons/eye-slash.svg";
import Field from "@components/Field";
import Label from "@components/Label";
import Input from "@components/Input";
import Button from "@components/Button";
import configs from "@configs/index";
import { SignInType } from "@ts/index";
import schema from "./SignIn.schema";

const SignIn: FC = () => {
    const {
        control,
        handleSubmit,
        formState: { isValid, isSubmitting, errors },
    } = useForm<SignInType>({ resolver: yupResolver(schema) });
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

    const handleSignIn = async (values: SignInType) => {
        if (!isValid || isSubmitting) return;

        try {
            await signInWithEmailAndPassword(
                configs.firebase.auth,
                values.email,
                values.password
            );
        } catch (error) {
            toast.error((error as Error).message, {
                delay: 0,
                pauseOnHover: false,
            });
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit(handleSignIn)}>
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
                {`Don't have an account? `}
                <Link to={configs.routes.signUp}>Sign up</Link>
            </span>

            <Button
                variant="primary"
                type="submit"
                isLoading={isSubmitting}
                className="button"
            >
                Sign In
            </Button>
        </form>
    );
};

export default SignIn;
