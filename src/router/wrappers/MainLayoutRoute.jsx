import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import MainLayout from '~/src/layouts/MainLayout';

// Main layout route wrapper

const MainLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <MainLayout>
          <Component {...matchProps} />
        </MainLayout>
      )}
    />
  );
};

export default MainLayoutRoute;
