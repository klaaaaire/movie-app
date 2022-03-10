import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';
import addFavorite from '../images/add-favorite.png';
import removeFavorite from '../images/remove-favorite.png';
import { NavLink } from 'react-router-dom';
import thumbup from '../images/thumbup.svg';
import thumbdown from '../images/thumbdown.svg';

function MovieCard({ movieObj }) {

    const [fav, setFav] = useState(null);
    // if movie not found in localstorage in favorites page then push movie into it
    function addFav() {
        // let favourites = JSON.parse(localStorage.getItem("favMovies"));
        // if (favourites.find(m => m.title == movieObj.title) != null) {
        //     const index = favourites.findIndex((movie) => movie.id == movieObj.id);
        //     if ( index > -1) {
        //         console.log("found")
        //         favourites.splice(index, 1);
        //         localStorage.setItem("favMovies", JSON.stringify(favourites));
        //     }
        // } else {
        //     favourites.push(movieObj);
        //     localStorage.setItem("favMovies", JSON.stringify(favourites))
        // }

        // setFav(JSON.parse(localStorage.getItem("favMovies")))
        // console.log(JSON.parse(localStorage.getItem("favMovies")))


        // CLAIRE TRYING
        // using JSON.parse so that can access to and use the values from the favMovies
        let fave = JSON.parse(localStorage.getItem("favMovies"));
        if(fave.find(m => m.id == movieObj.id) != null ){
            const findMovie = (movie) => movie.id == movieObj.id ;
            const index = fave.findIndex(findMovie);
            if(index > -1){
                fave.splice(index, 1);
                // storage.setItem(keyName, keyValue); ==> both has to be in strings
                localStorage.setItem("favMovies", JSON.stringify(fave))
                console.log("FOUND");
                console.log(index);
            }

        } else {
            console.log("NOT FOUND");
            fave.push(movieObj);
            localStorage.setItem("favMovies", JSON.stringify(fave));
        }

        setFav(JSON.parse(localStorage.getItem("favMovies")));
        
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
        <div className="movie-card">
            <div className="movie-poster">
                {/* If no poster, then render the no poster image */}
                {/* If there is a movie poster, then output using movie id (url parameter) */}
                {movieObj.poster_path === null ?
                    <img src={noPoster} alt="No poster" /> :
                    <img src={`https://image.tmdb.org/t/p/original${movieObj.poster_path}`} alt={movieObj.title} />
                }
            </div>
            <div className="movie-info">
                <h3>{movieObj.title}</h3>
                <p>{movieObj.release_date}</p>
                <div className="movie-rating">
                    <img src={movieObj.vote_average>5.0? thumbup : thumbdown} alt="rate Icon" id="movie-rating-icon" />
                    <p>{(movieObj.vote_average)*10}%</p>
                </div>
                <p className="overview">{movieObj.overview}</p>
                <Link to={`/movie/${movieObj.id}/credits`}>More Info</Link>
                <div>{heartIcon()}</div>
                
            </div>
        </div>
    )
}

export default MovieCard;

