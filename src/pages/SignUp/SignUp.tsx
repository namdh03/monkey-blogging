import { useState, FC } from "react";
import { useForm } from "react-hook-form";
import logo from "@assets/icons/logo.svg";
import eye from "@assets/icons/eye.svg";
import eyeSlash from "@assets/icons/eye-slash.svg";
import Container from "@components/Container";
import Field from "@components/Field";
import Label from "@components/Label";
import Input from "@components/Input";
import { SignUpPageStyled } from "./SignUp.styled";

const SignUp: FC = () => {
    const {
        control,
        handleSubmit,
        // formState: { errors, isValid, isSubmitting },
    } = useForm();
    const [togglePassword, setTogglePassword] = useState<boolean>(false);

    const handleSignUp = async (values: unknown) => {
        console.log(values);
    };

    return (
        <Container>
            <SignUpPageStyled>
                <img src={logo} alt="Monkey Blogging" className="logo" />
                <h1 className="heading">Monkey Blogging</h1>
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
                                onClick: () =>
                                    setTogglePassword(!togglePassword),
                            }}
                        />
                    </Field>
                </form>
            </SignUpPageStyled>
        </Container>
    );
};

export default SignUp;
