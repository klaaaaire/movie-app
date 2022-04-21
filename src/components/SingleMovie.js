import React, { useState, useEffect } from 'react';
import noPoster from '../images/no-movie-poster.jpg';
import addFavorite from '../images/add-favorite.png';
import removeFavorite from '../images/remove-favorite.png'
import thumbup from '../images/thumbup.svg';
import thumbdown from '../images/thumbdown.svg';
import mehIcon from '../images/meh.svg';
import playIcon from '../images/video.svg';
import { favMovies } from '../globals/globals';


function SingleMovie({ movieObj }) {

    const [fav, setFav] = useState(false)
    // if movie not found in localstorage in favorites page then push movie into it
    function addFav() {
        let favourites = JSON.parse(localStorage.getItem("favMovies"));
        if (favourites.find(m => m.title == movieObj.title) != null) {
            const index = favourites.findIndex((movie) => movie.id == movieObj.id);
            if ( index > -1) {
                console.log("found")
                favourites.splice(index, 1);
                localStorage.setItem("favMovies", JSON.stringify(favourites));
            }
        } else {
            favourites.push(movieObj);
            localStorage.setItem("favMovies", JSON.stringify(favourites))
        }

        setFav(JSON.parse(localStorage.getItem("favMovies")))
        console.log(JSON.parse(localStorage.getItem("favMovies")))
        
    }


    

    const heartIcon = () => {
        let favs = JSON.parse(localStorage.getItem("favMovies"));

        // if (JSON.parse(localStorage.getItem("favMovies")).includes(movieObj)) {
        if (favs.find(m => m.title == movieObj.title) != null) {
            // console.log("faved")
            return (
                <div className="remove-favorite" onClick={addFav}>
                    <img src={removeFavorite} alt="Unfavorite icon" />
                </div>
            )
        } else {
            // console.log("unfaved");
            return (
                <div className="add-favorite" onClick={addFav}>
                    <img src={addFavorite} alt="Favorite icon" />
                </div>
            )
        }
    }





    return (
        <div className="single-movie" style={{backgroundImage: movieObj.backdrop_path && `url(https://image.tmdb.org/t/p/original/${movieObj.backdrop_path})`}}>
            {/* <div className="single-movie-background-image" ></div> */}

            {/* reference page for the path */}
            {/* https://developers.themoviedb.org/3/getting-started/images */}
            <div className="single-movie-container" >
            
                <div className="single-movie-content" >
                        {movieObj.poster_path === null? <img src={noPoster} alt="no poster image" id="single-movie-poster"/> : <img src={`https://image.tmdb.org/t/p/original${movieObj.poster_path}`} alt={movieObj.title} id='single-movie-poster' />}
                    <div className="single-movie-info">
                        <h2 id="single-movie-title">{movieObj.title}</h2>
                        <div className="single-movie-info-header">
                            <p id="single-movie-release-date">{movieObj.release_date}</p>
                             <div>{heartIcon()}</div>
        
                            
                        </div>
                        
                        <div className="single-movie-rating">
                            <img src={movieObj.vote_average > 5.0? thumbup : thumbdown} alt="rate Icon" id="single-movie-rate-icon" />
                            <span >{(movieObj.vote_average)*10}%</span>
                        </div>
                        <p id="single-movie-overview">{movieObj.overview}</p>
                        <div className="single-movie-watch-now-btn-container">
                            <a href={`/movie/${movieObj.id}`} id="single-movie-watch-now-btn">Watch Now</a>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleMovie;
