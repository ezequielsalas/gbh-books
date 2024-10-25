// src/components/BookDetail.js
import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import {Container, Spinner, Card, Button} from 'react-bootstrap';

const BookDetail = () => {
    const { book_id } = useParams();
    const navigate = useNavigate();
    const { data: book, loading, error } = useFetch(`/book/${book_id}`);

    if (loading) return <Spinner animation="border" />;
    if (error) return <p>Error loading book details</p>;

    const homePage = () => {
        navigate(`/`);
    };

    const goReading = () => {
        navigate(`/book/${book.id}/page/1/text`);
    };
    return (
        <div className='container-fluid'>

            <Container style={{display: 'flex', justifyContent: 'center',  marginTop:'8rem'}}>
                <Card style={{width: '50rem', alignSelf:'center', display: 'flex'}}>
                    <Card.Img style={{width: '40rem', alignSelf:'center', margin:'2rem' }} variant="top" src="/book.png" sizes=""/>
                    <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
                        <Card.Text>{book.description}</Card.Text>
                        <Button onClick={goReading}>Start reading </Button>
                        <Button style={{marginLeft:'10px'}}  variant='secondary' onClick={homePage}>Cancel</Button>

                    </Card.Body>
                </Card>
            </Container>
        </div>
            );
            };

            export default BookDetail;
