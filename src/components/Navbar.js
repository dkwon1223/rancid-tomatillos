import '../styles/Navbar.scss';
import TomatilloIcon from '../assets/tomatillo-icon.svg';
import PropTypes from 'prop-types';

export default function Navbar({ search, setSearch }) {

    return (
        <nav className="nav">
            <div className='nav-logo'> 
                <img src={TomatilloIcon}/>
                <h1>Rancid Tomatillos</h1>
            </div>
                <div className='search-bar'>
                  <input className='search-input' type="search" placeholder='Search by Movie Title' value={search} onChange={(event) => setSearch(event.target.value)}/>  
                </div>
                
         
        </nav>
    )
}

Navbar.propTypes = {
    search: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    setSearch: PropTypes.func.isRequired
}