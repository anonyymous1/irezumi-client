import React from "react";
// import { Link } from 'react-router-dom'

const ProfileEdit = (props) => {
    console.log(props);
    return(
        <div>
            <h3>Profile Edit Page</h3>
            <form>
                <p className="old-email">CURRENT EMAIL:  {props.user.email.toUpperCase()}</p>
                <label htmlFor="search"/>
                <input type="text" name="search" id="search" />
                <input type="submit" value="Change Email"/>
            </form>
        </div>
    )
}

export default ProfileEdit;