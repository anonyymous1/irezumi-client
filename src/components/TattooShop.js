import React, {useState} from "react";
import axios from 'axios';
import keys from '../Keys';

const TattooShop = () => {
    
    const [searchBar, setSearchBar] = useState('')
    const [searchResults, setSearchResults] = useState('')
    const [fave, setFave] = useState('')

    const majorCity = (e) => {
        e.preventDefault()
        setSearchBar(e.target.innerHTML)
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${searchBar}`, {
            headers: {
                Authorization: `Bearer ${keys.API_KEY}`
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
                    <div className="row" key={idx}>
                        <div className="card5">
                        <a className="shopname" href={i.url}>{i.name}</a>
                        <div className="hr"></div>
                            <p>
                                {i.location.display_address[0]}<br></br>
                                {i.location.display_address[1]}<br></br>
                            </p>
                        <p>Price: {i.price}</p>
                        <p>Rating: {i.rating}</p>
                        <button className="btn-faves" onClick={
                            setFave(i.name)
                        }>Add to Faves</button>
                        </div>
                    </div>
                )
            }))
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    const handleSubmit = (e) => {
        console.log('----Incoming Data----');
        e.preventDefault()
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${searchBar}`, {
            headers: {
                Authorization: `Bearer ${keys.API_KEY}`
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
                    <div className="row" key={idx}>
                        <div className="card5">
                        <a className="shopname" href={i.url}>{i.name}</a>
                        <div className="hr"></div>
                            <p>
                                {i.location.display_address[0]}<br></br>
                                {i.location.display_address[1]}<br></br>
                            </p>
                        <p>Price: {i.price}</p>
                        <p>Rating: {i.rating}</p>
                        <button className="btn-faves" onClick={
                            setFave(i.name)
                        }>Add to Faves</button>
                        </div>
                    </div>
                )
            }))
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1 className="cities title">City Search</h1>
                <div className="hr"></div>
                <label htmlFor="search"/>
                <input type="text" name="search" id="search" onChange={ e => setSearchBar(e.target.value) } />
                <input className="btn btn-outline dropdown-toggle" type="submit" value="Search"/>
            </form>
            <div className="majorcitieslist">
                <h5 className="cities">Major Cities</h5>
                <p onClick={e => majorCity(e)} className="dropdown-item2" href="#">Texas</p>
                <p onClick={e => majorCity(e)} className="dropdown-item2" href="#">New York City</p>
                <p onClick={e => majorCity(e)} className="dropdown-item2" href="#">Las Vegas</p>
                <p onClick={e => majorCity(e)} className="dropdown-item2" href="#">Los Angeles</p>
                <p onClick={e => majorCity(e)} className="dropdown-item2" href="#">San Francisco</p>
                <p onClick={e => majorCity(e)} className="dropdown-item2" href="#">Seattle</p>
            </div>
            <div>
                {searchResults}
            </div>
        </div>
        
    )
}


export default TattooShop;