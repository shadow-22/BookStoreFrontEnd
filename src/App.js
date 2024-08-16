import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import AddBook from './AddBook';
import BookDetails from './BookDetails';
import SearchResults from './SearchResults';
import BookSearch from './BookSearch';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path="/books/:id">
              <BookDetails />
            </Route>
            <Route path='/AddBook'>
              <AddBook />
            </Route>
            <Route path="/search">
              <SearchResults />
            </Route>
            <Route path="/searchBooks">
             <BookSearch />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
