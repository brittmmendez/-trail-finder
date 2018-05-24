import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import TrailsPage from './containers/TrailsPage';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" render={() => <div>Home</div>} />
            <Route path='/trails' component={TrailsPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
