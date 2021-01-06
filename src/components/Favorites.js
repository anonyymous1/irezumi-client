import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Redirect } from 'react-router-dom';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Favorites = (props) => {
    const [favList, setFavList] = useState([])
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [redirect, setRedirect] = useState('')
  
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
                        <div className="comment-card">
                            <h3>{val.title}</h3>
                            <div className="hr"></div> 
                            <p className="cardcomment">{val.content}</p>
                            <button className="btn-signup2" onClick={handleDelete}>Delete</button>
                        </div>
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

    const handleDelete = (e) => {
        e.preventDefault();
        const userId = props.user.id
        const data = { userId, title, content };
        console.log(props.user);
        axios.delete(`${REACT_APP_SERVER_URL}/api/users/favorites/:id`, data)
        .then(response => {
            console.log(response);
            setRedirect(true)
        })
        .catch(err => {
            console.log(err);
        })
    }

    if (redirect) return <Redirect to="/favorites" />

    return(
        <div className="row">
            <h1 className="title">Your Favorites</h1>
            <div className="hr"></div> 
            <form onSubmit={handleSubmit}>
                <div className="post-comment">
                    <div>
                    <h3 className="post-comment-title">Save Your Idea</h3>
                    <label className="fav-name" htmlFor="title">Title</label>
                    </div>
                    <div>
                    <input className="fav-box" type="text" name="title" value={title} onChange={handleTitle}/>
                    </div>
                    <div>
                    <label className="fav-name" htmlFor="content">Content</label>
                    </div>
                    <div>
                    <input className="fav-box" type="text" name="content" value={content} onChange={handleContent}/>
                    </div>
                <button className="btn-signup" type="submit">Submit</button>
                </div>
            </form>
            <div className="row">
            {favList}
            </div>
        </div>
    )
}


export default Favorites;