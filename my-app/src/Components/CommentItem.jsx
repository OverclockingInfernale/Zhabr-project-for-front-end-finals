import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


const CommentItem = (props) => {
    const [solution, setSolution] = useState(true);
    const markAsSolution = () => setSolution(false);

    return (
        <div className='post'>
             <Card border='secondary' className='card-post bg-dark text-white ms-2'>
                    
                <Card.Header>
                <Card.Title>{props.com.name}</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text>{props.com.body}</Card.Text>
                    
                </Card.Body>
                <Card.Footer>
                    {solution?
                    <Button variant='outline-success' onClick={markAsSolution}>
                        <span className='material-symbols-outlined'>done</span>
                    </Button>:

                <div>
                    <Button variant='success'>
                        <span className='material-symbols-outlined'>done</span>
                    </Button>
                        <Card.Text>marked as solution</Card.Text>
                </div>
                    }  
                </Card.Footer>
            </Card>  
        </div>
    );
};

export default CommentItem;