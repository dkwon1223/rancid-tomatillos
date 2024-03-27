import '../styles/Navbar.scss';
import TomatilloIcon from '../assets/tomatillo-icon.svg';

export default function Navbar({ searchQuery, setSearchQuery }) {
    return (
        <nav className="nav">
            <div className='nav-logo'> 
                <img src={TomatilloIcon}/>
                <h1>Rancid Tomatillos</h1>
            </div>
            <div className='search-bar'>
                <input className='search-input' type="search" placeholder='Search by Movie Title' value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)}/>  
            </div>               
        </nav>
    )
}

