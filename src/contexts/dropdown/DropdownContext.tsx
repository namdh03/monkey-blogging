import { DropdownContextType } from "@ts/index";
import { FC, PropsWithChildren, createContext, useState } from "react";

const DropdownContext = createContext<DropdownContextType>({
    show: false,
    setShow: () => {},
    toggle: () => {},
});

const DropdownProvider: FC<PropsWithChildren> = ({ children }) => {
    const [show, setShow] = useState<boolean>(false);
    const toggle = () => setShow(!show);
    const values = { show, setShow, toggle };

    return (
        <DropdownContext.Provider value={values}>
            {children}
        </DropdownContext.Provider>
    );
};

export { DropdownContext, DropdownProvider };
