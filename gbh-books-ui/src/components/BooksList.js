// src/components/BooksList.js
import React from 'react';
import {  Container, Spinner, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const BooksList = () => {
    const { data: books, loading, error } = useFetch('/books');

    if (loading) return <Spinner animation="border" />;
    if (error) return <p>Error loading books</p>;

    return (
        <div className='container-fluid'>
        <Container style={{ marginTop:'8rem'}}>
            <h1>GBH Books</h1>
            <Table striped>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book => (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td><Link to={`/book/${book.id}`}>Open the book</Link></td>
                        </tr>
                    ))}
                </tbody>

                </Table>
        </Container>
        </div>
    );
};

export default BooksList;
