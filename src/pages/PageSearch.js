import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_TOKEN, API_KEY } from '../globals/globals';
import Movies from '../components/Movies';
import MovieCard from '../components/MovieCard';

function PageSearch() {


    const [query, setQuery] = useState(null);
    const [searchedTerm, setSearchedTerm] = useState(null);
    const [searching, setSearching] = useState(false);
    const [moviesResults, setMoviesResults] = useState(null);

    const searchMovies = async (e) => {
        e.preventDefault();
        setQuery(e.target[0].value);
        console.log(query);
        console.log(typeof query);

        // if user typed something into the input, 
        // if(query == null ||){
            setSearching(true);
            // setSearchedTerm(e.target[0].value);
            const searchTerm = e.target[0].value;
            const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`);
            setMoviesResults(res.data.results);
            console.log(res.data);
            console.log(moviesResults);
        // } else {
        // }
      

        
 
        // empty moviesResults at the end 
    }

   


    return (

        // if there is results, show the list of movies
        // if there isnt any result, show the message "Movie Title" cannot be found.
        <div>
            <h1 className="search-page-title">Movie Search</h1>
            <div className="search-form-container">
                <form className="search-form" onSubmit={searchMovies}>
                    <input className="search-input-box" type="text" name="query" placeholder="Search movie titles here" />
                    <button className="search-btn">Search Now</button>
                </form>
            </div>
            { moviesResults == null || '' ? <span>No results</span>  :  <Movies movieData={moviesResults}/>
}


    

        </div>
 
    )
}

export default PageSearch