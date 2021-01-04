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
                    <div key={idx}>
                        <img src={s.imageURL} alt={s.name} />
                        <a href={s.url}>{s.name}</a>
                        {s.address}
                        {s.phone}
                    </div>
                )
            }))
        })
    },[])
    


    return (
        <div>
        <h1>Welcome To Irezumi 入れ墨</h1>
        <h3>At Irezumi you can find the best parlors and artists around as well as gain some inspiration for tattoos that you want and the best places to go to get them done.</h3>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://res-3.cloudinary.com/dostuff-media/image/upload//w_1200,q_75,c_limit,f_auto/v1538078074/page-image-4703-b932c90f-cd31-4155-9f56-70fbb71dbf66.jpg" className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="https://www.badhabitstattoos.com/wp-content/uploads/2019/04/lase-tattoo-removal-1024x640.png" className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="https://i.imgur.com/kmyUv3v.jpg" className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="https://i.imgur.com/McfDdAO.jpg" className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="https://i.imgur.com/GlMuTc9.jpg" className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="https://i.pinimg.com/originals/12/e7/22/12e7225de596357a8247524ab2b29d2b.jpg" className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1561377455-190afb395ed7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="https://mymodernmet.com/wp/wp-content/uploads/2019/09/esther-garcia-tattoos-2.jpg" className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="https://www.wildtattooart.com/wp-content/uploads/2017/03/wolf-tattoos-12031771.jpg" className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="https://mymodernmet.com/wp/wp-content/uploads/2017/06/traditional-japanese-tattoo-1.jpg" className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="https://www.inkme.tattoo/wp-content/uploads/2015/11/Japanese-tattoos-09031744.jpg" className="d-block w-100" alt="..."></img>
                </div>
            </div>
        </div>
        <div>
            {topFive}
        </div>
    </div>
)
}
export default Welcome;