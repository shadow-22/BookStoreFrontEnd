import { useState } from 'react';

const BookSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [books, setBooks] = useState([]);
  
    const handleSearch = async () => {
      if (!searchQuery) return;
  
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`
      );
      const data = await response.json();
      setBooks(data.items || []);
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <h1>Google Books Search</h1>
        <input
            type="text"
            placeholder="Search for books..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
        />
        <button onClick={handleSearch} style={{ padding: '10px 20px' }}>
            Search
        </button>

        <div style={{ marginTop: '20px' }}>
            {books.map((book) => (
            <div
                key={book.id}
                style={{
                padding: '10px',
                borderBottom: '1px solid #ccc',
                marginBottom: '10px',
                }}
            >
                <h2>{book.volumeInfo.title}</h2>
                <h4>By {book.volumeInfo.authors?.join(', ')}</h4>
                <p>{book.volumeInfo.description}</p>
                {book.volumeInfo.imageLinks?.thumbnail && (
                <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.title}
                    style={{ width: '100px' }}
                />
                )}
            </div>
            ))}
        </div>
        </div>
    );
}
 
export default BookSearch;