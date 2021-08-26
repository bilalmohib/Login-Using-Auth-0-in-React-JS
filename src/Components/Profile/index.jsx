import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";

import "./style.scss";

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <>
                <div className="text-center">
                    <img style={{ borderRadius: 50 }} width={250} src={user.picture} alt={user.name} />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>

                    {/* {JSON.stringify(user, null, 2)} */}
                </div>
                <JSONPretty data={user} />
            </>
        )
    )
}
export default Profile;