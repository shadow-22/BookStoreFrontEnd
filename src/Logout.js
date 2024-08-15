const Logout = () => {
    
    const handleLogout = () => {
        localStorage.removeItem('jwtToken');  // Remove the JWT token from localStorage
        alert('Logged out successfully!');
        // Optionally, you can redirect the user to the home page or login page after logout
        // window.location.href = '/';
    };


    return (
        <button onClick={handleLogout} className="logout-button">
            Logout
        </button>
    );
}
 
export default Logout;