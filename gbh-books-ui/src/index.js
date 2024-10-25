// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // Import createRoot from react-dom/client
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

// Set Axios base URL from environment variable
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

// Get the root element in the HTML
const rootElement = document.getElementById('root');

// Create a root using ReactDOM.createRoot
const root = ReactDOM.createRoot(rootElement);

// Render the app using createRoot
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
