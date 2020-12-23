import React, {useState} from "react";
import axios from 'axios'
import { Redirect } from 'react-router-dom';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
// import { Link } from 'react-router-dom'

const ProfileEdit = (props) => {
    // console.log(props);
    const [newEmail, setNewEmail] = useState('')
    const [newName, setNewName] = useState('')
    const [redirect, setRedirect] = useState('')

    const dataChange = (e) => {
        console.log('----Changing Email----');
        e.preventDefault();
        const userID = props.user.id
        const email = newEmail
        const name = newName
        const userData = { email, name, userID }
        console.log(userData);
        axios.put(`${REACT_APP_SERVER_URL}/api/users/update`, userData)
        .then(res =>{
            setRedirect(true)
        })
        .catch(error => {
            console.log(error);
        })
    }

    if (redirect) return <Redirect to="/profile" />

    const handleName = (e) => {
        e.preventDefault();
        setNewName(e.target.value)
    }
    
    const handleEmail = (e) => {
        e.preventDefault();
        setNewEmail(e.target.value)
    }

    return(
        <div>
            <h3>Profile Edit Page</h3>
            <form>
                <p className="old-email">CURRENT EMAIL:  {props.user.email.toUpperCase()}</p>
                <label/>
                <input type="text" name="email" id="email" onChange={handleEmail} />
                <p className="old-email">CURRENT NAME:  {props.user.name.toUpperCase()}</p>
                <label/>
                <input type="text" name="name" id="name" onChange={handleName} />
                <div>
                <input type="submit" value="Update Profile"  onClick={dataChange}/>
                </div>
                <div>
                    <h4>Changes will take effect the next time you log in.</h4>
                </div>
            </form>
        </div>
    )
}

export default ProfileEdit;