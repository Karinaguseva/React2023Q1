import React, { Component } from 'react';
import { SetSearch } from '../../types/search';

interface SearchProps {
  search: string;
  setSearch: SetSearch;
}

class Search extends Component<SearchProps> {
  render() {
    return (
      <input
        className="view-control__search"
        placeholder="найти..."
        type="search"
        value={this.props.search}
        onChange={this.props.setSearch}
      ></input>
    );
  }
}

export default Search;
