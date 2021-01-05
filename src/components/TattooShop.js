import React, {useState} from "react";
import axios from 'axios';
// import keys from '../Keys';

const TattooShop = () => {
    
    const [searchBar, setSearchBar] = useState('')
    const [searchResults, setSearchResults] = useState('')

    
    
    
    const handleSubmit = (e) => {
        console.log('----Incoming Data----');
        // console.log(`Searched For: ${searchBar}`);
        // console.log(keys.API_KEY);
        e.preventDefault()
        // const corsApiUrl = 'https://cors-anywhere.herokuapp.com/';
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${searchBar}`, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
            },
            params: {
                term: 'tattoo'
            }
        })
        .then(result => {
            const shops = result.data.businesses;
            console.log(shops);
            setSearchResults( shops.map((i, idx) => {
                return (
                   <div key={idx}>
                       <h3>{i.name}</h3>
                       <p>{i.display_phone}</p>
                       <p>
                            {i.location.display_address[0]}<br></br>
                            {i.location.display_address[1]}<br></br>
                            {i.location.display_address[2]} 
                        </p>
                       <p>Price: {i.price}</p>
                       <p>Rating: {i.rating}</p>
                   </div> 
                )
            }))
            // setSearchResults(result)
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>City Search</h1>
                <label htmlFor="search"/>
                <input type="text" name="search" id="search" onChange={ e => setSearchBar(e.target.value) } />
                <input type="submit" value="Search"/>
            </form>
            <div>
                <h1>Major Cities</h1>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Top Cities
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <p className="dropdown-item" href="#" >New York City</p>
                        <p className="dropdown-item" href="#">Las Vegas</p>
                        <p className="dropdown-item" href="#">Los Angeles</p>
                    </div>
                </div>
            </div>
            <div>
                {searchResults}
            </div>
        </div>
        
    )
}


export default TattooShop;