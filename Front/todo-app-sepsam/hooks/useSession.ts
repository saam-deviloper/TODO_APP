import AuthContext from "@/contexts/ctx";
import { useContext } from "react";

export function useSession() {
    const value = useContext(AuthContext);
    if(process.env)
    return {
        session: {
            user: {
                name: 'Sepsam',
            },
        },
    };
}