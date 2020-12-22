import React, {useState} from "react";
import axios from 'axios';

const ImageSearch = () => {
    
    const [searchBar, setSearchBar] = useState('')
    const [searchResults, setSearchResults] = useState('')

    const handleSubmit = (e) => {
        console.log('----Incoming Data----');
        console.log(`Searched For: ${searchBar}`);
        e.preventDefault()
        const options = {
                method: 'GET',
                url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
                params: {q: searchBar, pageNumber: '1', pageSize: '15', autoCorrect: 'true'},
                headers: {
                    'x-rapidapi-key': 'd48cd9f666msh34a6fa9b0ab6328p1c0f86jsn98d34a8d06f9',
                    'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
                }   
            }
            axios.request(options)
            .then(result => {
                // console.log(result.data.value[0].url);
                const images = result.data.value;
                setSearchResults( images.map((i, idx)=>{
                    return (
                    <img key={idx} className="images" src={i.thumbnail} alt={searchBar}/>
                    )
                }))
        })
    }
    
    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Image Search</h1>
                <label htmlFor="search"/>
                <input type="text" name="search" id="search" onChange={ e => setSearchBar(e.target.value) } />
                <input type="submit" value="Search"/>
            </form>
            <div>
                <div>
                    <div>
                        {searchResults}
                    </div>
                </div>
            </div>
        </div> 
    )
}
export default ImageSearch;