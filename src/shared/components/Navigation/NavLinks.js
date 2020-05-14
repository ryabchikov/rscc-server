import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>Home</NavLink>
            </li>
            <li>
                <NavLink to="/satellites" exact>Satellites</NavLink>
            </li>
            <li>
                <NavLink to="/beams" exact>Beams</NavLink>
            </li>
            <li>
                <NavLink to="/satellites/add" exact>NewSatellite</NavLink>
            </li>
            <li>
                <NavLink to="/beams/add" exact>NewBeam</NavLink>
            </li>
            <li>
                <NavLink to="/ships" exact>Ships</NavLink>
            </li>
        </ul>
    )
}

export default NavLinks;