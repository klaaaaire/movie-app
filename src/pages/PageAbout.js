import TMDbLogo from '../images/tmdb-logo.svg';


function PageAbout() {
    return (
        <section className="about-page">
            <h2>About <span className="about-page-logo">Movie Club</span></h2>
            <p>Movie Club is an online movie database that lets users browse movies based on popularity, rating and release date. The platform also allows registered users to keep track of movies they love by adding films to their favorites list.</p>
            <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
            <img src={TMDbLogo} alt="tmdb logo" />
        </section>
    )
}

export default PageAbout;
