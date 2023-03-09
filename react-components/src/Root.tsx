import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import Footer from './components/Footer';

class Root extends Component {
  render() {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  }
}

export default Root;
