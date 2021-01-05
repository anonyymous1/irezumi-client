import React, {useState} from "react";
import axios from 'axios'
import { Redirect } from 'react-router-dom';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
// import { Link } from 'react-router-dom'

const ProfileEdit = (props) => {
    // console.log(props);
    const [newEmail, setNewEmail] = useState('')
    const [newName, setNewName] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [imageAlt, setImageAlt] = useState('')
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

    const handleImageUpload = (e) => {
        e.preventDefault();
        console.log('button works');
        const { files } = document.querySelector('input[type="file"]')
        const formData = new FormData();
        formData.append('file', files[0]);
        formData.append('upload_preset', 'ivgbzzgb');
        const options = {
            method: 'POST',
            body: formData,
        };
        return fetch('https://api.cloudinary.com/v1_1/alexbustillos/image/upload', options)
        .then(res => res.json())
        .then(res => {
            const userID = props.user.id
            const url = res.secure_url
            const edit = { userID, url }
            axios.put(`${REACT_APP_SERVER_URL}/api/users/updateProfile`, edit)
        .then(res =>{
            setRedirect(true)
        })           
        })
        .catch(err => console.log(err));
        
        
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
                <section className="left-side">
                    <div className="form-group">
                        <input type="file"/>
                    </div>
                    <button type="button" className="btn" onClick={handleImageUpload}>Submit</button>
                    <button type="button" className="btn widget-btn">Upload Via Widget</button>
                </section>
                <section className="right-side">
                    <p>The result is here</p>
                    {imageUrl && (
                        <img src="{imageUrl}" alt="{imageAlt}" className="displayed-image"/>
                    )}
                </section>

                <div>
                    <h4>Changes will take effect the next time you log in.</h4>
                </div>
            </form>
        </div>
    )
}

export default ProfileEdit;