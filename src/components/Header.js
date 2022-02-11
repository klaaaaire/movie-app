import {Link} from 'react-router-dom';
import NavMain from './NavMain';
import logo from "../images/movie-logo.png";

function Header() {
    return (
        <header className="site-header">
            {/* <h1><Link to="/">Movie Club</Link></h1> */}
            <Link to="/"><img src={logo} alt="back to top button" /></Link>
            <NavMain />
        </header>
    )
}

export default Header;
