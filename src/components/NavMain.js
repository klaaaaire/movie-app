import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function NavMain() {


    const [expanded, setExpanded] = useState(false);

    function expandedTrue(){
        setExpanded(true);
        console.log(expanded);
    }

    function expandedFalse(){
        setExpanded(false);
        console.log(expanded);
    }

    const [toggled, setToggled] = useState(false);
    const [toggleText, setToggleText] = useState(null);

    function toggledTrue(){
        setToggled(true);
        setToggleText("toggled");
        console.log(toggled);
    }
    function toggledFalse(){
        setToggled(false);
        console.log(toggled);
        setToggleText(null);

    }
    

    return (
        <nav className={`site-navigation ${ toggleText }`} id="site-navigation">

            <button onClick={expanded !== true && toggled !== true && toggleText === null ? expandedTrue && toggledTrue : expandedFalse && toggledFalse} class="menu-toggle" aria-controls="header-menu" aria-expanded={expanded} >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                    <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"></path>
                </svg>
            </button>

            <ul class="nav-menu" id="header-menu">
                <li>
                    <NavLink onClick={expandedFalse && toggledFalse} to="/" exact>Home</NavLink>
                </li>
                <li>
                    <NavLink onClick={expandedFalse && toggledFalse} to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink onClick={expandedFalse && toggledFalse} to="/favorites">Favorites</NavLink>
                </li>
                <li>
                    <NavLink onClick={expandedFalse && toggledFalse} to="/search">Search</NavLink>
                </li>
            </ul>

        </nav>
    )
}

export default NavMain;
