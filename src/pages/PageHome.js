import { useEffect, useState } from 'react';
import { API_KEY, API_TOKEN } from '../globals/globals';
import NavSort from '../components/NavSort';
import Movies from '../components/Movies';
import Banner from '../components/Banner';



function PageHome({ sort }) {

    const [movieData1, setMovieData1] = useState(null);
    const [movieData2, setMovieData2] = useState(null);
    const [movieData3, setMovieData3] = useState(null);
    const [movieData4, setMovieData4] = useState(null);
    const [movieData5, setMovieData5] = useState(null);

    const [page, setPage] = useState(1)

    // variable for Banner
    const [movieDataBanner, setMovieDataBanner] = useState(null);
    const [movieBannerLength, setMovieBannerLength] = useState(null);


    // when change occurs(like sort property), run the function in useEffect
    useEffect(() => {
        // using async since we need the data before load the page
        const fetchMovies = async() => {
            // fetch() - built in function
            const res = await fetch(`https://api.themoviedb.org/3/movie/${sort}?&language=en-US&page=${page}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+ API_TOKEN 
                }
                
            });
            let rawMovieData = await res.json();

            // splice making a copy of array that returned 
            rawMovieData = rawMovieData.results.splice(0, 12);
    
            // save the data returned into a variable 
            

            if(page === 1){
                setMovieData1(rawMovieData);
            }else if(page === 2) {
                setMovieData2(rawMovieData);
            } else if (page === 3 ){
                setMovieData3(rawMovieData);
            }else if(page === 4) {
                setMovieData4(rawMovieData);
            }else if(page === 5) {
                setMovieData5(rawMovieData);
            }

        }

        fetchMovies();
    }, [sort, page]);



    // Banner
    const fetchPopularMovies = async() => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + API_TOKEN,
            },
        });
        let popularMovieData = await res.json();
        popularMovieData = popularMovieData.results.splice(0, 10);
        setMovieDataBanner(popularMovieData);
        setMovieBannerLength(popularMovieData.length);

    };
    useEffect( async () => {
        await fetchPopularMovies();
    }, []);

    function handleLoadMore(){
        setPage(page + 1);
    }

    return (
        <div>
            <Banner movieObj = {movieDataBanner} movieBannerLength = {movieBannerLength} />
            <NavSort />
            {movieData1 !== null && <Movies movieData={movieData1} />}
            {(movieData1 !== null && movieData2 === null) && <div className='load-more-btn-container'><button onClick={handleLoadMore} className='load-more-btn'>Load More</button></div>}
            
            {movieData2 !== null && <Movies movieData={movieData2} />}
            {(movieData2 !== null && movieData3 === null) && <div className='load-more-btn-container'><button onClick={handleLoadMore} className='load-more-btn'>Load More</button></div> }
        
            {movieData3 !== null && <Movies movieData={movieData3} />}
            {(movieData3 !== null && movieData4 === null ) && <div className='load-more-btn-container'><button onClick={handleLoadMore} className='load-more-btn'>Load More</button></div>}
           
            {movieData4 !== null && <Movies movieData={movieData4} />}
            {(movieData4 !== null && movieData5===null) && <div className='load-more-btn-container'><button onClick={handleLoadMore} className='load-more-btn'>Load More</button></div>}
         
            {movieData5 !== null && <Movies movieData={movieData5} />}
        </div>

        
    )
}

export default PageHome;
