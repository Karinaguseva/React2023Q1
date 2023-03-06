import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return <div>ПРИВЕТ я работаю </div>;
}

const root = document.getElementById('root');

if (root) ReactDOM.createRoot(root).render(<App />);
