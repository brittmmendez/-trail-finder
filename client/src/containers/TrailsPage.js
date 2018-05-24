import React, { Component } from 'react';
import { Route, Switch  } from 'react-router-dom';
import '../App.css';
import { connect } from 'react-redux';
import TrailsList from '../components/TrailsList';
import TrailShow from './TrailShow';
import TrailsNew from './TrailsNew';
import { getTrails } from '../actions';
import { likeTrail } from '../actions';


class TrailsPage extends Component {

  componentDidMount() {
    this.props.getTrails()
    debugger;
  }

  render() {
    const { trails, match } = this.props;

    return (
      <div>
        <TrailsList trails={trails} />
        <Switch>
          <Route path={`${match.url}/new`} component={TrailsNew} />
          <Route path={`${match.url}/:trailId`} component={TrailShow}/>
          <Route exact path={match.url} render={() => (
            <h3>Please select a Trail from the list.</h3>
          )}/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    trails: state.trails
  };
}

export default connect(mapStateToProps, {getTrails, likeTrail})(TrailsPage);
