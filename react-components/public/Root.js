import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import Footer from './components/Footer';
class Root extends Component {
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement(Header, null),
            React.createElement(Outlet, null),
            React.createElement(Footer, null)));
    }
}
export default Root;
