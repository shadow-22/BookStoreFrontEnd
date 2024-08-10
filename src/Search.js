import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState(''); // State to store the user's search input
    const history = useHistory(); // Hook to navigate programmatically

    const handleSearch = (e) => {
        e.preventDefault(); // Prevent the form from refreshing the page
        if (searchQuery.trim()) { // Check if the search query is not just whitespace
            // Redirect to the search results page with the query as a URL parameter
            history.push(`/search?query=${encodeURIComponent(searchQuery)}`);
            setSearchQuery(''); // Clear the search input after the search
        }
    };

    return (
        <form onSubmit={handleSearch} className="search-form">
            <input 
                type="text" 
                placeholder="Search books..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Update state on input change
            />
            <button type="submit">Search</button>
        </form>
    );
}
 
export default Search;