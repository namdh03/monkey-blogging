import { FC } from "react";
import { Control, useController } from "react-hook-form";
import { CheckboxProps, FormType } from "@ts/index";
import { CheckboxStyled } from "./Checkbox.styled";

const Checkbox: FC<CheckboxProps> = ({
    checked = false,
    children,
    control,
    name,
    ...rest
}) => {
    const { field } = useController({
        control: control as Control<FormType>,
        name,
        defaultValue: "",
    });

    return (
        <label>
            <input
                checked={checked}
                type="checkbox"
                className="hidden-input"
                {...field}
                {...rest}
                value={rest.value?.toString()}
            />
            <CheckboxStyled $isChecked={checked}>
                <div className="checkbox">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>
                <span>{children}</span>
            </CheckboxStyled>
        </label>
    );
};

export default Checkbox;
