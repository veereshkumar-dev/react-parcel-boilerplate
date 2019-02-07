import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import('~/src/sass/layouts/main.scss');

class MainLayout extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
  };

  render() {
    const { children } = this.props;
    return (
      <div className="main-layout">
        <header />
        <main>{children}</main>
        <footer />
      </div>
    );
  }
}

export default MainLayout;
