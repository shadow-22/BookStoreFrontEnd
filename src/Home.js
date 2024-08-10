import BookList from './BookList.js';
import useFetch from './useFetch.js';

const Home = () => {
    const { data: books, isPending, error } = useFetch('http://localhost:3001/books');

    return (
        <div className="home">
            <h2>This is the Home Page.</h2>
            { error && <div> { error } </div> }
            { isPending && <div>Loading...</div> }
            { books && <BookList books={books} title="All Books!" />  }
        </div>
    );
}
 
export default Home;