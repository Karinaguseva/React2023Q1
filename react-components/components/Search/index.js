import React, { Component } from 'react';
import './index.scss';
class Search extends Component {
    render() {
        return (React.createElement("div", { className: "search" },
            React.createElement("input", { className: "search__input", placeholder: "Find beast...", type: "search", value: this.props.search, onChange: this.props.setSearch })));
    }
}
export default Search;
