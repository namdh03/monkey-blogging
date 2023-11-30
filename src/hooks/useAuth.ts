import { useContext } from "react";
import { AuthContext } from "@contexts/auth/AuthContext";

export default function useAuth() {
    const context = useContext(AuthContext);

    if (!context) throw new Error("Auth context must be inside AuthProvider");

    return context;
}
