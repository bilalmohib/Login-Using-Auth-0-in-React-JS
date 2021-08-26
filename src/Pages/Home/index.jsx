import React from "react";

import Header from "../../Components/Header";
import LoginButton from "../../Components/LoginButton";
import LogoutButton from "../../Components/LogoutButton";
import Profile from "../../Components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
    const { isLoading } = useAuth0();
    return (
        <>
            <Header />
            {(isLoading) ? (
                <div className="text-center mt-4 h3">
                    Loading ......
                </div>
            ) : (
                <div className="mt-4 text-center d-flex justify-content-evenly">
                    <LoginButton />
                    <LogoutButton />
                </div >
            )
            }

            <br />
            <Profile />
        </>
    )
}
export default Home;