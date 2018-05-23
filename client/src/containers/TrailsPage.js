import React from 'react';
import { Route, Switch  } from 'react-router-dom';
import { connect } from 'react-redux';
import TrailsList from '../components/TrailsList';
import TrailShow from './TrailShow';
import TrailsNew from './TrailsNew';

const TrailsPage = ({ match, trails }) =>
  <div>
    <TrailsList trails={trails} />
    <Switch>
      <Route path={`${match.url}/new`} component={TrailsNew} />
      <Route path={`${match.url}/:trailId`} component={TrailShow}/>
      <Route exact path={match.url} render={() => (
        <h3>Please select a Trail from the list.</h3>
      )}/>
    </Switch>
  </div>;

const mapStateToProps = (state) => {
  return {
    trails: state.trails
  };
}

export default connect(mapStateToProps)(TrailsPage);
