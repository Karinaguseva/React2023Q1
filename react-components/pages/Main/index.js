import React, { Component } from 'react';
import Search from 'components/Search';
import Cards from '../../components/Cards';
import './index.scss';
class Main extends Component {
    state;
    constructor(props) {
        super(props);
        this.state = { search: '' };
        this.setSearch = this.setSearch.bind(this);
    }
    setSearch(event) {
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
        return (React.createElement("main", { className: "main" },
            React.createElement(Search, { search: this.state.search, setSearch: this.setSearch }),
            React.createElement(Cards, { search: this.state.search })));
    }
}
export default Main;
