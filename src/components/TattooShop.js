import React from "react";
const TattooShop = () => {
    return (
        <div>
            <h1>City Search</h1>
            <div>
                <h1>Major Cities</h1>
                <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Top Cities
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#" >New York City</a>
                    <a class="dropdown-item" href="#">las Vegas</a>
                    <a class="dropdown-item" href="#">los Angeles</a>
                </div>
            </div>

            </div>
        </div>
        
    )
}


export default TattooShop;