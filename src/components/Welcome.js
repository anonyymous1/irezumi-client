import React, { useEffect, useState } from "react";
import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;


const Welcome = () => {
    const [topFive, setTopFive] = useState('')

    useEffect(()=>{
        axios.get(`${REACT_APP_SERVER_URL}/api/users/welcomeshops`)
        .then(res =>{
            setTopFive(res.data.foundShops.map((s, idx) => {
                return(
                    <div className="card">
                        <img src={s.imageURL} className="card-img-top" alt={s.name}/>
                    <div className="card-body">
                    <div>
                        <a className="shopname" href={s.url}>{s.name}</a>
                    </div>
                        <p className="card-text">{s.address}</p>
                        <p className="card-text">{s.phone}</p>
                    </div>
                    </div>
                )
            }))
        })
    },[])
    


    return (
        <div>
        <div className="welcome-text">
        <h1>Welcome To Irezumi 入れ墨</h1>
        <h3>At Irezumi you can find the best parlors and artists around as well as gain some inspiration for tattoos that you want and the best places to go to get them done.</h3>
        </div>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://i.imgur.com/Ve172Bu.png" className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="https://i.imgur.com/hPNE1fq.png" className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="https://i.imgur.com/nr6ZQC9.png" className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="https://i.imgur.com/kBAWQx5.png" className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="https://i.imgur.com/OYBg6uq.png" className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="https://i.imgur.com/FtQ4TkC.png" className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="https://i.imgur.com/0cRREaB.png" className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="https://i.imgur.com/nesRUd6.png" className="d-block w-100" alt="..."></img>
                </div>
            </div>
        </div>
        <div>
            <h1 className="top-five-h1">
                Irezumi's Top 5 of the Month
            </h1>
        </div>
        <div className="card-div">
            {topFive}
        </div>
    </div>
)
}
export default Welcome;