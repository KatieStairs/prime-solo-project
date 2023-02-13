import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

function UnfinishedRecipeItem({ unfinished }) {
    const history = useHistory();

    const goToEditIngredientsPage = () => {
        history.push(`/EditRecipe/${unfinished.id}`)
    }

    return (
            <Box
                key={unfinished.id}
                mx={6}
                my={3}
                border={4}
                px={2}
                py={3}
                borderColor="black"
                height={75}
                width={800}
                display="flex"
                justifyContent="center"
                alignItems="center"
                bgcolor="white"
                color="black"
                fontSize={40}
            >
            {unfinished.recipe_name} By {unfinished.recipe_author}
            <Button variant="contained" onClick={goToEditIngredientsPage}>Edit Ingredients</Button>
            <Button variant="contained">Share</Button>
        </Box>
    )
}

export default UnfinishedRecipeItem;