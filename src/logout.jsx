import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const LogoutButton = () => {
    const { logout } = useAuth0();

    function prepareLogout() {
      localStorage.removeItem('user');
      logout({ returnTo: process.env.REACT_APP_API_URL });
    }

    return <button onClick={() => prepareLogout()}>Log Out</button>;
}