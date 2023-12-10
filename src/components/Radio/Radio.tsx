import { FC } from "react";
import { useController } from "react-hook-form";
import { RadioProps } from "@ts/index";
import { RadioStyled } from "./Radio.styled";

const Radio: FC<RadioProps> = ({
    checked = false,
    children,
    control,
    name,
    ...rest
}) => {
    const { field } = useController({
        control,
        name,
        defaultValue: "",
    });

    return (
        <label>
            <input
                checked={checked}
                type="radio"
                className="hidden-input"
                {...field}
                {...rest}
                value={field.value.toString()}
            />
            <RadioStyled $isChecked={checked}>
                <div className="radio"></div>
                <span>{children}</span>
            </RadioStyled>
        </label>
    );
};

export default Radio;
