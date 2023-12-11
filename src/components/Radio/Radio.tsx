import { FC } from "react";
import { Control, useController } from "react-hook-form";
import { FormType, RadioProps } from "@ts/index";
import { RadioStyled } from "./Radio.styled";

const Radio: FC<RadioProps> = ({
    checked = false,
    children,
    control,
    name,
    ...rest
}) => {
    const { field } = useController({
        control: control as Control<FormType>,
        name,
        defaultValue: 0,
    });

    return (
        <label>
            <input
                checked={checked}
                type="radio"
                className="hidden-input"
                {...field}
                {...rest}
                value={rest.value?.toString()}
            />
            <RadioStyled $isChecked={checked}>
                <div className="radio"></div>
                <span>{children}</span>
            </RadioStyled>
        </label>
    );
};

export default Radio;
