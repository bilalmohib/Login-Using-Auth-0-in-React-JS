import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import "./style.scss";

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <button className="btn btn-danger btn-lg" onClick={() => logout()}>
                Logout
            </button>
        )
    )
}
export default LogoutButton;