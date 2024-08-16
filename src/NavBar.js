import { Link } from 'react-router-dom';
import Search from './Search';
import Login from './Login';
import Logout from './Logout';
import Test from './Test';

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
            <div className="test">
                <Test />
            </div>
            <div className="searchBooksGoogle">
                <Link to='/searchBooks'>Search Google</Link>
            </div>
        </nav>
    );
}
 
export default NavBar;
