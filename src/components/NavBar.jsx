import {Link} from 'react-router-dom';
import './NavBar.css';

export default function NavBar() 
{
    return(
        <nav>
            <Link to ="/" className = "Icon">Talking about Games!!</Link>
            <Link to ="/">Home</Link>
            <Link to = "/games">Games</Link>
            <Link to ="/blog">Blogs</Link>
            <Link to ="/login">Login</Link>
        </nav>
    )
}