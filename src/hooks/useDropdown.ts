import { DropdownContext } from "@contexts/dropdown/DropdownContext";
import { useContext } from "react";

export default function useDropdown() {
    const context = useContext(DropdownContext);

    if (!context)
        throw new Error("Dropdown context must be inside DropdownProvider");

    return context;
}
