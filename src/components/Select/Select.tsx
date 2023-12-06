import { FC } from "react";
import { useDropdown } from "@hooks/index";
import { SelectProps } from "@ts/index";
import { SelectStyled } from "./Select.styled";

const Select: FC<SelectProps> = ({ placeholder }) => {
    const { show, toggle } = useDropdown();

    return (
        <SelectStyled>
            <div className="dropdown__wrapper" onClick={toggle}>
                <span>{placeholder}</span>
                <span>
                    {show ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="dropdown__icon"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 15l7-7 7 7"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="dropdown__icon"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    )}
                </span>
            </div>
        </SelectStyled>
    );
};

export default Select;
