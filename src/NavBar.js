import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1>Pericle's Online Bookstore</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to='/addBook'>Add Book</Link>
            </div>
        </nav>
    );
}
 
export default NavBar;
