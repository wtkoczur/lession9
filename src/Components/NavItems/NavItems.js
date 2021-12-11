import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faHome, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

import useMobile from '../../Hooks/useMobile/useMobile';

const DesktopNavItem = () => {
    return (
        <div className="NavMenu">
            <NavLink className="link" to="/"><FontAwesomeIcon className="icon" icon={faHome}></FontAwesomeIcon>Home</NavLink>
            <NavLink className="link" to="/movies"><FontAwesomeIcon className="icon" icon={faFilm}> </FontAwesomeIcon>Movies</NavLink>
            <NavLink className="link" to="/places"><FontAwesomeIcon className="icon" icon={faMapMarkerAlt}> </FontAwesomeIcon>Places</NavLink>
    </div>
    )
}

const MobileNavItem = () => {
    return (
        <div className="NavMenu">
            <NavLink className="link" to="/"><FontAwesomeIcon className="icon" icon={faHome}></FontAwesomeIcon></NavLink>
            <NavLink className="link" to="/movies"><FontAwesomeIcon className="icon" icon={faFilm}></FontAwesomeIcon></NavLink>
            <NavLink className="link" to="/places"><FontAwesomeIcon className="icon" icon={faMapMarkerAlt}></FontAwesomeIcon></NavLink>
    </div>
    )
}

const NavItems = () => {
    const isMobile = useMobile();
    return(
        <div>
            {isMobile ? <MobileNavItem /> : <DesktopNavItem /> }
        </div>
    )
}

export default NavItems;