import Box from '@material-ui/core/Box';
// import Button from '@material-ui/core/Button';
import { Favorite } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


function UnfinishedRecipeItem({ unfinished }) {
    const history = useHistory();
    const dispatch = useDispatch();

    const goToEditIngredientsPage = () => {
        history.push(`/EditRecipe/${unfinished.recipe_id}`)
    }

    const deleteRecipe = () => {
        // dispatch({
        //     type: 'SAGA/DELETE_UNFINISHED',
        //     payload: unfinished.recipe_id
        // })
    }

    return (
        <Container>
            <Row>
                <Col className="d-flex">
                <Card 
                    className="flex-fill" 
                    key={unfinished.recipe_id}
                    style={{ width: '99rem' }}>
                <Card.Title as="h2">{unfinished.recipe_name}</Card.Title>
                <Card.Body>
                <Card.Text as="h3">
                    By {unfinished.recipe_author}
                </Card.Text>
                <Button variant="outline-secondary" onClick={goToEditIngredientsPage}>Edit Recipe</Button>
                <Button variant="outline-secondary" onClick={deleteRecipe}>Delete</Button>
            </Card.Body>
            </Card>
            </Col>
            </Row>
        </Container>
    )
}

export default UnfinishedRecipeItem;