import React, { Component } from 'react';
import Search from 'components/Search';
import Cards from '../../components/Cards';

interface MainState {
  search: string;
}

class Main extends Component {
  state: MainState;

  constructor(props: object) {
    super(props);
    this.state = { search: '' };

    this.setSearch = this.setSearch.bind(this);
  }

  setSearch(event: React.ChangeEvent<HTMLInputElement>) {
    localStorage.setItem('search.value', event.currentTarget.value);

    this.setState({
      ...this.state,
      search: event.currentTarget.value,
    });
  }

  componentDidMount() {
    const search = localStorage.getItem('search.value');
    if (search)
      this.setState({
        ...this.state,
        search,
      });
  }

  componentWillUnmount() {
    localStorage.setItem('search.value', this.state.search);
  }

  render() {
    return (
      <main className="main">
        <Search search={this.state.search} setSearch={this.setSearch}></Search>
        <Cards search={this.state.search} />
      </main>
    );
  }
}

export default Main;
