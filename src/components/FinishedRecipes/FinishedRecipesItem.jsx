import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
// import Button from '@material-ui/core/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function FinishedRecipesItem ({ finished }) {
    const dispatch = useDispatch();
    const history = useHistory();

    // const goToFullView = () => {
    //     history.push(`/EditRecipe/${finished.recipe_id}`)
    // }

    const deleteRecipe = () => {
        dispatch({
            type: 'SAGA/DELETE_FINISHED',
            payload: finished.recipe_id
        })
        console.log('*********** finished', finished)
    }


    return (
        <Container>
        <Row>
            <Col className="d-flex">
            <Card 
                className="flex-fill" 
                key={finished.recipe_id}
                style={{ width: '99rem' }}>
            <Card.Title as="h2">{finished.finalized_recipe_name}</Card.Title>
            <Card.Body>
            <Card.Text as="h3">
                By {finished.finalized_author}
            </Card.Text>
            <Button variant="outline-secondary">Edit Recipe</Button>
            <Button variant="outline-secondary" onClick={deleteRecipe}>Delete</Button>
        </Card.Body>
        </Card>
        </Col>
        </Row>
    </Container>
        // <Box
        //     key={finished.recipe_id}
        //     mx={6}
        //     my={3}
        //     border={4}
        //     px={2}
        //     py={3}
        //     borderColor="black"
        //     height={75}
        //     width={800}
        //     display="flex"
        //     justifyContent="center"
        //     alignItems="center"
        //     bgcolor="white"
        //     color="black"
        //     fontSize={40}
        //     >
        //     {finished.finalized_recipe_name} By {finished.finalized_author}    
        //     <Button variant="contained">View</Button>
        //     <Button variant="contained" onClick={deleteRecipe}>Delete</Button>
        // </Box>
    )
}

export default FinishedRecipesItem;