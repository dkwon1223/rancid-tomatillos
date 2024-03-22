import '../styles/Navbar.scss';
import TomatilloIcon from '../assets/tomatillo-icon.svg';

export default function Navbar() {
    

    return (
        <nav className="nav">
            <div className='nav-logo'>
                <img src={TomatilloIcon}/>
                <h1>Rancid Tomatillos</h1>
            </div>
            {/* <div className='nav-options'>
                <label htmlFor="search">Rancid Search</label>
                <input 
                    type='text' 
                    name="search" 
                    value={search}
                    placeholder='Search movies...'
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className='nav-search-button' onClick={renderSearch}><img src={SearchIcon}/></button>
            </div> */}
        </nav>
    )
}
