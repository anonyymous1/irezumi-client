import React from 'react';

const About = () => {
    return(
        <div>
            <div className="about-div-parent">
                <h1 className="title">Irezumi</h1>
                <div className="about-div">1</div>
                <div className="about-div">2</div><br/>
                <div className="about-div">3</div>
                <div className="about-div">4</div>
            </div>
            <div className="about-dev-parent">
                <h1 className="title">Developers</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p><br/>
                <div className="row-dev">
                    <div className="col-sm-6">
                        <div className="card3">
                        <div className="card-body">
                            <h5 className="card-title-dev">Alex Bustillos</h5>
                            <a href="https://github.com/AlexJBustillos" className="btn"><img className="github-img" src="https://i.imgur.com/GpOnmrS.png" alt="github-link"/></a>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card3">
                        <div className="card-body">
                            <h5 className="card-title-dev">Ashton Mitchell</h5>
                            <a href="https://github.com/Swolepenguin" className="btn"><img className="github-img" src="https://i.imgur.com/GpOnmrS.png" alt="github-link"/></a>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card3">
                        <div className="card-body">
                            <h5 className="card-title-dev">Amari James</h5>
                            <a href="https://github.com/marjames98" className="btn"><img className="github-img" src="https://i.imgur.com/GpOnmrS.png" alt="github-link"/></a>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card3">
                        <div className="card-body">
                            <h5 className="card-title-dev">Ruben Cedeno</h5>
                            <a href="https://github.com/anonyymous1" className="btn"><img className="github-img" src="https://i.imgur.com/GpOnmrS.png" alt="github-link"/></a>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default About;