import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import {Container, Spinner, Button, Card, ButtonGroup} from 'react-bootstrap';
import useFetch from "../hooks/useFetch";

const PageReader = () => {
    const { book_id, page_number, format } = useParams();
    const { data:pageContent, loading, } = useFetch(`/book/${book_id}/page/${page_number}/${format}`);
    const navigate = useNavigate();  // Replace useHistory with useNavigate

    const nextPage = () => {
        navigate(`/book/${book_id}/page/${parseInt(page_number) + 1}/${format}`);
    };
    const viewMode = (mode) => {
        navigate(`/book/${book_id}/page/${parseInt(page_number)}/${mode}`);
    };
    const homePage = () => {
        navigate(`/`);
    };
    return (
        <div className='container-fluid'>
            <Container  style={{display: 'flex', justifyContent: 'center', marginTop:'8rem'}}>
                {loading ? (
                    <Spinner animation="border"/>
                ) : (
                    <Card style={{width: '50rem', alignSelf:'center', display: 'flex'}}>
                        <Card.Title style={{margin:'10px'}}>
                            <ButtonGroup aria-label="Basic example" style={{}}>
                                <Button variant="secondary" onClick={()=>viewMode('text')} className="me-2">Text</Button>
                                <Button variant="secondary"  onClick={()=>viewMode('html')}>Html</Button>
                            </ButtonGroup>
                        </Card.Title>
                        <Card.Body>
                            <h1>{pageContent.book_title}</h1>
                            <div style={{minHeight: '30rem'}}>
                            <pre>{format === 'text' ? pageContent.content :
                                <div dangerouslySetInnerHTML={{__html: pageContent}}/>}</pre>
                            </div>
                            <Button onClick={nextPage}>Next Page</Button>
                            <Button style={{marginLeft: '10px'}} onClick={homePage} variant='secondary'>Go home</Button>
                        </Card.Body>
                    </Card>
                )}
            </Container>
        </div>
            );
            };

            export default PageReader;
