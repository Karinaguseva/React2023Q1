import React from 'react';
import ReactDOM from 'react-dom/client';
function App() {
    return React.createElement("div", null, "\u041F\u0420\u0418\u0412\u0415\u0422 \u044F \u0440\u0430\u0431\u043E\u0442\u0430\u044E ");
}
const root = document.getElementById('root');
if (root)
    ReactDOM.createRoot(root).render(React.createElement(App, null));
