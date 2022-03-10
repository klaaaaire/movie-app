import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_TOKEN, API_KEY } from '../globals/globals';
import Movies from '../components/Movies';
import MovieCard from '../components/MovieCard';

function PageSearch() {


    const [query, setQuery] = useState(null);
    const [searching, setSearching] = useState(false);
    const [moviesResults, setMoviesResults] = useState(null);

    const searchMovies = async (e) => {
        e.preventDefault();

        // find the input value and grab it 
        setQuery(e.target[0].value);
        console.log(query);
        console.log(typeof query);
        setSearching(true);

        // if no value entered in the input box,
        if(query == ''){
            setMoviesResults(null);
            setSearching(false);
        } else {
            const searchTerm = e.target[0].value;

            // put it in the api calling
            const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`);
    
            // save it into a useState so can display
            setMoviesResults(res.data.results);
            console.log(res.data);
            console.log(moviesResults);

        }

    

        // empty the useState variable at the end or when new terms searched


        // what happens when nothing is entered in the input box? --> gives an error so we should run the code above when there is a value typed into the box

    }

   


    return (

        // if there is results, show the list of movies
        // if there isnt any result, show the message "Movie Title" cannot be found.
        <div className="search-page-container">
            <h1 className="search-page-title">Search Movies</h1>
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