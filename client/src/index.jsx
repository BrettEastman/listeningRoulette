import React from "react";
import App from "./components/App.jsx";
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

console.info('HOST:', `http://${process.env.SITE_URL}:${process.env.PORT}`);
root.render(<App />);
