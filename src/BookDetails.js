import { useParams } from "react-router-dom/cjs/react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BookDetails = () => {
    const { id } = useParams();
    const { data:book, error, isPending } = useFetch('/jaxrs-api/api/books/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('/jaxrs-api/api/books/' + book.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="book-details">
        { isPending && <div>Loading...</div> }
        { error && <div>{ error }</div> }
        { book &&  (
            <article>
                <h2>{ book.title }</h2>
                <p>Written by { book.author }</p>
                <div>{ book.summary }</div>
                <button onClick={handleClick}>delete</button>
            </article>
        )}
    </div>
    );
}
 
export default BookDetails;