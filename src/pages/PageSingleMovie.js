import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { API_TOKEN } from '../globals/globals';
import SingleMovie from '../components/SingleMovie';


function PageSingleMovie() {

    const { id } = useParams(); 

    const [movieData, setMovieData] = useState(null);

    console.log(id)

    // https://developers.themoviedb.org/3/movies/get-movie-details
    // when change occurs, run the function in useEffect
    useEffect(() => {
        // using async since we need the data before load the page
        const fetchMovies = async() => {
            // fetch() - built in function
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?&language=en-US&page=1`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+ API_TOKEN 
                }
            });
            let rawMovieData = await res.json();

            // save the data returned into a variable 
            setMovieData(rawMovieData);
        }

        fetchMovies();
    }, []);

    return (
        <div>
            {/* if movieData does have information, display SingleMovie */}
            {movieData !== null && <SingleMovie movieObj = {movieData} />}
        </div>
    )
}

export default PageSingleMovie;
