import {Link} from 'react-router-dom';
import './NavBar.css';

export default function NavBar() 
{
    return(
        <nav>
            <Link to ="/" className = "Icon">Talking about Games!!</Link>
            <Link to ="/">Home</Link>
            <Link to = "/games">Games</Link>
            <Link to ="/about">About</Link>
            <Link to ="/contact">Contact</Link>

        </nav>
    )
}