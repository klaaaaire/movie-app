import {BrowserRouter as Router, Route} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { API_TOKEN } from '../globals/globals';
import Movies from '../components/Movies';
import PageHome from './PageHome';

function PageFavs() {
    
    // create state for favMovies array
    const savedMovies = JSON.parse(localStorage.getItem("favMovies"))

    return (
        <section className="favorites">
            <h2>Favorite Movies</h2>
            {/* <h2>{savedMovies === null ? "No Favorite": "Here are your favorites"}</h2> */}
            {/* {savedMovies.length !== 0 ? <Movies movieData={savedMovies} /> :<Route path="/" exact><PageHome sort='popular' /><p>You have no favorites. Please go back to the homepage to add some savedMovies</p></Route>} */}
            {savedMovies.length !== 0 ? <Movies movieData={savedMovies} /> : <p className="no-favorites">You have no favorites. Please go back to the <NavLink to="/sort/popular">home page </NavLink>to add some movies.</p>}
        </section>
    )
}

export default PageFavs;