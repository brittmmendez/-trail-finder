import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import TrailsPage from './containers/TrailsPage';
import { getTrails } from './actions';
import { connect } from 'react-redux';

class App extends Component {
    componentDidMount() {
      this.props.getTrails()
    }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/trails' component={TrailsPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect(null, {getTrails})(App);
