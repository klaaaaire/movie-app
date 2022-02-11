import { useEffect, useState } from "react";
import noPoster from '../images/no-movie-poster.jpg';


function Banner( { movieObj, movieBannerLength } ) {

    const [bannerData, setBannerData] = useState(null);
    
    useEffect(() => {
        setBannerData(movieObj);
    }, [movieObj]);


    let randomNum = Math.floor(Math.random() * movieBannerLength);

    let movieDisplayed = movieObj && movieObj[randomNum];




    return (
        <div className="banner-container">
            <img src={`https://image.tmdb.org/t/p/original/${movieDisplayed && movieDisplayed.backdrop_path}`} alt="placeholder" />
            <div className="banner-info-container">
                <h2 class="banner-title">{ movieDisplayed && movieDisplayed.title}</h2>
                <p class="banner-overview">{ movieDisplayed && movieDisplayed.overview}</p>

                {/* path to the movie page (use movie id) */}
                <a href={`/movie/${movieDisplayed && movieDisplayed.id}`} id="banner-watch-now-btn">Watch Now</a>

            </div>

            
        </div>
    )
}

export default Banner;

