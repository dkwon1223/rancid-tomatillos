import '../styles/Navbar.scss';
import TomatilloIcon from '../assets/tomatillo-icon.svg';

export default function Navbar({ search, setSearch }) {
    return (
        <nav className="nav">
            <div className='nav-logo'> 
                <img src={TomatilloIcon}/>
                <h1>Rancid Tomatillos</h1>
                <input type="search" placeholder='Search by Movie Title' value={search} onChange={(event) => setSearch(event.target.value)}/>
            </div>
        </nav>
    )
}
