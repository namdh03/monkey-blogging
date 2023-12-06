import { FC } from "react";
import { ToggleProps } from "@ts/index";
import { ToggleStyled } from "./Toggle.styled";

const Toggle: FC<ToggleProps> = ({ on, onClick, ...rest }) => {
    return (
        <ToggleStyled $on={on}>
            <label>
                <input
                    type="checkbox"
                    checked={on}
                    className="hidden-input"
                    onChange={() => {}}
                    onClick={onClick}
                />
                <div className="toggle" {...rest}>
                    <span className="toggle__dot"></span>
                </div>
            </label>
        </ToggleStyled>
    );
};

export default Toggle;
