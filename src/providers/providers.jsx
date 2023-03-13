import React from "react";
import { UserProvider } from "./UserContext";

export function Providers({children}){
    return(
        <UserProvider>
            {children}
        </UserProvider>
    )
}