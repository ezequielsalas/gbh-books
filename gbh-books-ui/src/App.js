// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BooksList from './components/BooksList';
import BookDetail from './components/BookDetail';
import PageReader from './components/PageReader';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<BooksList />} />
                <Route path="/book/:book_id" element={<BookDetail />} />
                <Route path="/book/:book_id/page/:page_number/:format" element={<PageReader />} />
            </Routes>
        </Router>
    );
};

export default App;
