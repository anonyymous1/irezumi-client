import React from "react";
const Welcome = () => {
    return (
        <div>
            <h1>Welcome To Irezumi</h1>
            <h3>At Irezumi you can find the best parlors and artists around as well as gain some inspiration for what exactly it is that you want and where.</h3>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://i.imgur.com/kmyUv3v.jpg" class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src="https://i.imgur.com/McfDdAO.jpg" class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src="https://i.imgur.com/GlMuTc9.jpg" class="d-block w-100" alt="..."></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Welcome;

