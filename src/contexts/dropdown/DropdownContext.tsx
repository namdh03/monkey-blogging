import { DropdownContextType } from "@ts/index";
import { FC, PropsWithChildren, createContext } from "react";

const DropdownContext = createContext<DropdownContextType>({});

const DropdownProvider: FC<PropsWithChildren & DropdownContextType> = ({
    children,
    ...props
}) => {
    return (
        <DropdownContext.Provider value={props}>
            {children}
        </DropdownContext.Provider>
    );
};

export { DropdownContext, DropdownProvider };
