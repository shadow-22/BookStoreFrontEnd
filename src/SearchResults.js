import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const SearchResults = () => {
    const location = useLocation();
    const [results, setResults] = useState([]);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const query = params.get('query')?.toLowerCase();

        if (query) {
            fetch('http://localhost:3001/books')
                .then(response => response.json())
                .then(data => {
                    // Manually filter the data based on the query
                    const filteredBooks = data.filter(book => 
                        book.title.toLowerCase().includes(query)
                    );
                    setResults(filteredBooks);
                })
                .catch(error => console.error('Error fetching search results:', error));
        }
    }, [location.search]);

    return (
        <div className="search-results">
            <h2>Search Results</h2>
            <ul>
                {results.map(book => (
                    <li key={book.id}>{book.title} by {book.author}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchResults;