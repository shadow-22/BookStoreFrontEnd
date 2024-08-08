import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import AddBook from './AddBook';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/AddBook'>
          <AddBook />
        </Route>
      </div>
    </Router>
  );
}

export default App;
