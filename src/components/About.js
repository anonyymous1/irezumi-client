import React from 'react';

const About = () => {
    return(
        <div>
            <div className="about-div-parent">
                <h1 className="title">About Irezumi</h1>
                <div className="hr"></div>
                <div className="about-div">
                    <img className="about-img" src="https://i.imgur.com/bFJNUVL.png" alt=""/>
                    <h5 className="about-title">Why Irezumi?</h5>
                    <p className="about-text">Why? We only have you in mind. We created a platform for you to feel safe about finding not only the tattoo you want but also who will do it for you. Get updates on the nearest shops, their ratings, prices and links. Have any other question?, feel free to contact a dev.</p>
                </div>
                <div className="about-div">
                    <img className="about-img" src="https://i.imgur.com/QSrF8Tb.png" alt=""/>
                    <h5 className="about-title">How do you do it?</h5>
                    <p className="about-text">We do it using by programming using the following: Javascript, Node.js, React, MongoDB, Mongoose, Axios, and cloudinary. We also get help from some cool APIs from Pexel (Image API) and Yelp(Business API).</p>
                </div><br/>
                <div className="about-div">
                    <img className="about-img" src="https://i.imgur.com/p7fzTja.png" alt=""/>
                    <h5 className="about-title">Navigation</h5>
                    <p className="about-text">First, thank you for visting our platform. To navgiate simple Sign Up or Login using the links above. Once you log in, you will be able to use the Tattoo Shops link, Image Search and Profile features for users. Feel free to update your user information and profile picture.</p>
                </div>
                <div className="about-div">
                    <img className="about-img" src="https://i.imgur.com/BOkBW36.png" alt=""/>
                    <h5 className="about-title">Any Future Updates?</h5>
                    <p className="about-text">Of course! This site will be an ongoing project. We are thinking of cool ways to give you updates, use of better APIs, make the site more user friendly. We also would like to add things to help you choose artist better with live twitter feeds and instagram feeds.</p>
                </div>
            </div><br/>
            <div className="about-dev-parent">
                <h1 className="title">About the Developers</h1>
                <div className="hr"></div>
                <div className="row">
                    <div className="dev-p">
                        <p>
                            Meet the team who brought Irezumi to life. Working together, each team member has brought a skill set to help contribute to this app. To view more of an individuals work or portfolio. Click the links below.
                        </p>
                    </div>
                </div>
                <div className="row-dev">
                    <div className="col-sm-6">
                        <div className="card3">
                        <div className="card-body">
                            <h5 className="card-title-dev">Alex Bustillos</h5>
                            <p className="desc">FULLSTACK DEVELOPER</p>
                            <a href="https://github.com/AlexJBustillos" className="btn"><img className="github-img" src="https://i.imgur.com/GpOnmrS.png" alt="github-link"/></a>
                            <a href="https://www.linkedin.com/in/alexjbustillos/" className="btn"><img className="linkedin-img" src="https://i.imgur.com/oAwmaXD.png" alt="linkedin-link"/></a>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card3">
                        <div className="card-body">
                            <h5 className="card-title-dev">Ashton Mitchell</h5>
                            <p className="desc">FULLSTACK DEVELOPER</p>
                            <a href="https://github.com/Swolepenguin" className="btn"><img className="github-img" src="https://i.imgur.com/GpOnmrS.png" alt="github-link"/></a>
                            <a href="https://www.linkedin.com/in/ashton-mitchell-951002170/" className="btn"><img className="linkedin-img" src="https://i.imgur.com/oAwmaXD.png" alt="linkedin-link"/></a>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card3">
                        <div className="card-body">
                            <h5 className="card-title-dev">Amari James</h5>
                            <p className="desc">FULLSTACK DEVELOPER</p>
                            <a href="https://github.com/marjames98" className="btn"><img className="github-img" src="https://i.imgur.com/GpOnmrS.png" alt="github-link"/></a>
                            <a href="linkedin.com/in/amari-james/" className="btn"><img className="linkedin-img" src="https://i.imgur.com/oAwmaXD.png" alt="linkedin-link"/></a>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card3">
                        <div className="card-body">
                            <h5 className="card-title-dev">Ruben Cedeno</h5>
                            <p className="desc">FULLSTACK DEVELOPER</p>
                            <a href="https://github.com/anonyymous1" className="btn"><img className="github-img" src="https://i.imgur.com/GpOnmrS.png" alt="github-link"/></a>
                            <a href="https://www.linkedin.com/in/ruben-cedeno-756b309b/" className="btn"><img className="linkedin-img" src="https://i.imgur.com/oAwmaXD.png" alt="linkedin-link"/></a>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default About;