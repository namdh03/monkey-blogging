import { FC } from "react";
import { useController } from "react-hook-form";
import { InputProps } from "@ts/index";
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
        control,
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
