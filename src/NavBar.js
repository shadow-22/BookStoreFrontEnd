import { Link } from 'react-router-dom';
import Search from './Search';
import Login from './Login';
import Logout from './Logout';

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1>Pericle's Online Bookstore</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to='/addBook'>Add Book</Link>
            </div>
            <div className="search-nav">
                <Search />                
            </div>
            <div className="login">
                <Login />
            </div>
            <div className="logout">
                <Logout />
            </div>
        </nav>
    );
}
 
export default NavBar;
