import React, {useState} from "react";
import axios from 'axios';
import keys from '../Keys';

const TattooShop = () => {
    
    const [searchBar, setSearchBar] = useState('')
    const [searchResults, setSearchResults] = useState('')

    
    
    
    const handleSubmit = (e) => {
        console.log('----Incoming Data----');
        // console.log(`Searched For: ${searchBar}`);
        console.log(keys.API_KEY);
        e.preventDefault()
        // const corsApiUrl = 'https://cors-anywhere.herokuapp.com/';
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=nyc`, {
            headers: {
                Authorization: `Bearer ${keys.API_KEY}`
            },
            params: {
                term: 'tattoo'
            }
        })
        .then(result => {
            console.log(result);
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