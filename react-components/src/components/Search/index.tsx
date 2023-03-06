import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <input
        className="view-control__search"
        placeholder="найти..."
        type="search"
        // value={searchParams.get('search') || ''}
        // onChange={searchHandler}
      ></input>
    );
  }
}

export default Search;
