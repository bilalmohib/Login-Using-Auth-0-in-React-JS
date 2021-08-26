import React from "react";

import Header from "../../Components/Header";
import LoginButton from "../../Components/LoginButton";
import LogoutButton from "../../Components/LogoutButton";
import Profile from "../../Components/Profile";

const Home = () => {
    return (
        <>
            <Header />
            <div className="mt-4 text-center d-flex justify-content-evenly">
                <LoginButton />
                <LogoutButton />
            </div>
            <br />
            <Profile />
        </>
    )
}
export default Home;