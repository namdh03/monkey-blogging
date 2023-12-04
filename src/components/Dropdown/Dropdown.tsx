import { FC, useState } from "react";
import { DropdownProps } from "@ts/index";
import { DropdownStyled } from "./Dropdown.styled";
import { DropdownProvider } from "@contexts/dropdown/DropdownContext";

const Dropdown: FC<DropdownProps> = ({
    children,
    placeholder = "Please select an option",
    ...props
}) => {
    const [show, setShow] = useState<boolean>(false);

    const handleToggleDropdown = () => setShow(!show);

    return (
        <DropdownProvider {...props}>
            <DropdownStyled>
                <div
                    className="dropdown__wrapper"
                    onClick={handleToggleDropdown}
                >
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

                {show && <div className="dropdown__children">{children}</div>}
            </DropdownStyled>
        </DropdownProvider>
    );
};

export default Dropdown;
