import '../styles/Navbar.scss';
import TomatilloIcon from '../assets/tomatillo-icon.svg';

export default function Navbar() {
    return (
        <nav className="nav">
            <div className='nav-logo'> 
                <img src={TomatilloIcon}/>
                <h1>Rancid Tomatillos</h1>
            </div>
        </nav>
    )
}
