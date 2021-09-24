import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { logout } from "../redux/profile/profile.reducer";

const Profile = (props) => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.profile.user);
    const logoutHandler = () => dispatch(logout());

    return (
        <div>
            {user && <>
                Hello dear, {user.name}
                <button onClick={logoutHandler}>logout</button>
            </>}
            {!user && <Redirect to="/" />}
        </div>
    )

};

export default Profile;