import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App.jsx';


// MAIN
console.info('HOST:', `http://${process.env.SITE_URL}:${process.env.PORT}`);
const root = createRoot(document.getElementById('root'));
root.render(
  <App />
);
