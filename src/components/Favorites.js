import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Redirect } from 'react-router-dom';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Favorites = (props) => {
    const [favList, setFavList] = useState([])
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [redirect, setRedirect] = useState('')
    
    
    console.log(props);
    const userID = props.user.id



    useEffect(() => {
        const userId = props.user.id
        axios.get(`${REACT_APP_SERVER_URL}/api/users/all`)
        .then(async res => {
            const filterList = await res.data.filter(value => {
                if (value.userId === userId) {return true}
            })
            const newFavList = await filterList.map((val, key) => {
                return(
                        <div key={key}>
                            <h2>{val.title}</h2>
                            <p>{val.content}</p>
                        </div>)})
            setFavList(newFavList);
        })
    }, [props.user.id])
    
    const handleContent = (e) => {
        setContent(e.target.value)
    }
    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const userId = props.user.id
        const data = { userId, title, content };

        axios.post(`${REACT_APP_SERVER_URL}/api/users/favorites`, data)
        .then(response => {
            console.log(response);
            setRedirect(true)
        })
        .catch(error => {
            console.log(error);
        })
    }

    if (redirect) return <Redirect to="/favorites" />

    return(
        <div>
            <h1>Your Favorites</h1> 
            {favList}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={title} onChange={handleTitle} className="form-control" />
                    <label htmlFor="content">Content</label>
                    <input type="text" name="content" value={content} onChange={handleContent} className="form-control" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}


export default Favorites;