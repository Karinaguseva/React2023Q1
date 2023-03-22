import React, { Component } from 'react';
import { SetSearch } from '../../types/search';
import './index.scss';

interface SearchProps {
  search: string;
  setSearch: SetSearch;
}

class Search extends Component<SearchProps> {
  render() {
    return (
      <div className="search">
        <input
          className="search__input"
          placeholder="Find beast..."
          type="search"
          value={this.props.search}
          onChange={this.props.setSearch}
        ></input>
      </div>
    );
  }
}

export default Search;
