import { FC } from "react";
import { Control, useController } from "react-hook-form";
import { FormType, InputProps } from "@ts/index";
import { InputStyled } from "./Input.styled";

const Input: FC<InputProps> = ({
    id,
    name,
    type,
    control,
    placeholder,
    icon,
    ...props
}) => {
    const { field } = useController({
        control: control as Control<FormType>,
        name,
        defaultValue: "",
    });

    return (
        <InputStyled $isIcon={!!icon}>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                {...field}
                {...props}
            />

            {icon && (
                <img src={icon.src} onClick={icon.onClick} className="icon" />
            )}
        </InputStyled>
    );
};

export default Input;
