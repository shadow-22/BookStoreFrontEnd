import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AddBook = () => {
    const [title, setTitle] = useState('');
    const [isbn, setIsbn] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const book = { title, isbn, author };
        setIsPending(true);
        console.log(book);
        fetch('/jaxrs-api/api/books', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(book)
        }).then(() => {
            console.log('New book Added');
            setIsPending(false);
            //history.go(-1);
            history.push('/');
        })
    }

    return (
        <div className="addBook">
            <h2>Add a new book</h2>
            <form onSubmit={handleSubmit}>
                <label>Book title:</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>book isbn:</label>
                <textarea
                    required
                    value={isbn}
                    onChange={(e) => setIsbn(e.target.value)}
                ></textarea>
                <label>book author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                { !isPending && <button>Add book</button> }
                { isPending && <button disabled>Adding book...</button> }               
            </form>
        </div>
    );
}
 
export default AddBook;