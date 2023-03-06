import React, { Component } from 'react';
class Card extends Component {
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", null, this.props.data.name),
            React.createElement("div", null, this.props.data.categoryID)));
    }
}
export default Card;
