import React from 'react';
import './index.scss';
import { useActions } from '../../../hooks/useAction';
const Card = ({ data }) => {
    const { changeCardId } = useActions();
    const showModalWindow = (id) => {
        changeCardId(id);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "preview", onClick: () => {
                showModalWindow(data.id.toString());
            } },
            React.createElement("img", { src: data.image, alt: data.name, className: "preview__img", width: '250px', height: '250px' }),
            React.createElement("div", { className: "preview__title" }, data.name))));
};
export default Card;
