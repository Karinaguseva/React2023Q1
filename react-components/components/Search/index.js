import React, { Component } from 'react';
class Search extends Component {
    render() {
        return (React.createElement("input", { className: "view-control__search", placeholder: "\u043D\u0430\u0439\u0442\u0438...", type: "search", value: this.props.search, onChange: this.props.setSearch }));
    }
}
export default Search;
