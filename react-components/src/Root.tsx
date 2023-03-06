import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header';

class Root extends Component {
  render() {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
  }
}

export default Root;
