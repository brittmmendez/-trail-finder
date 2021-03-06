import React, { Component } from 'react';
import { Route, Switch  } from 'react-router-dom';
import '../App.css';
import { connect } from 'react-redux';                                          //connects component to redux store provided by provider component
import TrailsList from '../components/TrailsList';
import TrailShow from './TrailShow';
import TrailsNew from './TrailsNew';
import { likeTrail } from '../actions';
import { deleteTrail } from '../actions';
import TrailsEdit from './TrailsEdit';
import { Link } from 'react-router-dom';

class TrailsPage extends Component {

  render() {
    const { trails, match } = this.props;

    return (
      <div>
        <Switch>
          <Route exact path={match.url} render={() => (
            <TrailsList trails={trails} />
          )}/>
          <Route  path={`${match.url}/new`} component={TrailsNew} />
          <Route exact path={`${match.url}/:trailId/edit`} component={TrailsEdit}/>
          <Route exact path={`${match.url}/:trailId`} component={TrailShow}/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    trails: state.trails
  });
}

export default connect(mapStateToProps, {likeTrail})(TrailsPage);
