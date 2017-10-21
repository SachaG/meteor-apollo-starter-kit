import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import {
  AuthenticatedRoute,
  PublicRoute,
} from '../../ui/components/route-wrappers/index.js';
import AuthPage from '../../ui/pages/auth/index.jsx';
import HomePage from '../../ui/pages/home/index.jsx';
import NotFoundPage from '../../ui/pages/not-found-page.jsx';

//------------------------------------------------------------------------------
// COMPONENT:
//------------------------------------------------------------------------------
const Routes = (props) => {
  const { currentUser } = props;

  return (
    <Switch>
      <AuthenticatedRoute
        exact
        name="home"
        path="/"
        authenticated={!!currentUser}
        component={HomePage}
        redirectTo="/auth"
        // overlayComponent={AuthPage}
        {...props}
      />
      <PublicRoute
        name="auth"
        path="/auth"
        authenticated={!!currentUser}
        component={AuthPage}
        redirectTo="/"
        {...props}
      />
      {/* <Route name="search" path="/:query" component={SearchPageContainer} /> */}
      <Route name="notFound" component={NotFoundPage} />
    </Switch>
  );
};

Routes.propTypes = {
  currentUser: PropTypes.shape({
    _id: PropTypes.string,
    randomString: PropTypes.string,
  }),
};

Routes.defaultProps = {
  currentUser: null,
};

export default Routes;