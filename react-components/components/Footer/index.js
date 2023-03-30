import React from 'react';
import './index.scss';
const Footer = () => {
    return (React.createElement("footer", { className: "footer" },
        React.createElement("div", { className: "wrapper" },
            React.createElement("div", { className: "footer__container" },
                React.createElement("div", { className: "footer__gitHub gitHub" },
                    React.createElement("a", { className: "gitHub__kar", href: "https://github.com/Karinaguseva", target: "_blank", rel: "noreferrer" }, "KarinaGuseva")),
                React.createElement("div", { className: "footer__year" }, "\u00A9 2023"),
                React.createElement("a", { className: "footer__rss", href: "https://rs.school/js/", target: "_blank", rel: "noreferrer" }, "rs school course js")))));
};
export default Footer;
