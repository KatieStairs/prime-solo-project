import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


function EditRecipe() {
    const dispatch = useDispatch();
    const [editedIngredientsInput, setEditedIngredientsInput] = useState('')
    const [editedDirectionsInput, setEditedDirectionsInput] = useState('')
    const [editedNotesInput, setEditedNotesInput] = useState('')
    const [editedRecipeNameInput, setEditedRecipeNameInput] = useState('')

    // const IngredientsObject = {editedRecipeNameInput, editedIngredientsInput}

    const handleEditedIngredientsSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_INGREDIENTS',
            payload: { editedRecipeNameInput,
            editedIngredientsInput }
        })
    }

    const handleEditedDirectionsSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_DIRECTIONS',
            payload: editedDirectionsInput
        })
    }

    const handleEditedNotesSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_NOTES',
            payload: editedNotesInput
        })
    }

    const handleEditedRecipeNameSubmit = (event) => {

    }
    
    return (
        <div>
        <Box onChange={(event) => setEditedRecipeNameInput(event.target.value)}
            mx={6}
            my={2}
            border={4}
            px={2}
            py={1}
            borderColor="black"
            height={50}
            width={800}
            display="flex"
            justifyContent="left"
            alignItems="left"
            bgcolor="white"
            color="black"
            fontSize={20}
            >
            <TextField
                id="outlined-multiline-static"
                label="Recipe Name:"
                multiline
                minRows={1.5}
                defaultValue=""
                fullWidth
            />
        </Box>
        <Box onChange={(event) => setEditedIngredientsInput(event.target.value)}
            mx={6}
            my={2}
            border={4}
            px={2}
            py={3}
            borderColor="black"
            height={300}
            width={800}
            display="flex"
            justifyContent="left"
            alignItems="left"
            bgcolor="white"
            color="black"
            fontSize={20}
            >
            <TextField
                id="outlined-multiline-static"
                label="Edit Recipe Ingredients:"
                multiline
                minRows={15.5}
                defaultValue=""
                fullWidth
            />
        </Box>
            <Button variant="contained" onClick={handleEditedIngredientsSubmit}>Save Ingredients</Button>
        <Box onChange={(event) => setEditedDirectionsInput(event.target.value)}
            mx={6}
            my={2}
            border={4}
            px={2}
            py={3}
            borderColor="black"
            height={300}
            width={800}
            display="flex"
            justifyContent="left"
            alignItems="left"
            bgcolor="white"
            color="black"
            fontSize={20}
            >
        <TextField
            id="outlined-multiline-static"
            label="Edit Recipe Directions:"
            multiline
            minRows={15.5}
            defaultValue=""
            fullWidth
        />
        </Box>
            <Button variant="contained" onClick={handleEditedDirectionsSubmit}>Save Directions</Button>
        <Box onChange={(event) => setEditedNotesInput(event.target.value)}
            mx={6}
            my={2}
            border={4}
            px={2}
            py={3}
            borderColor="black"
            height={300}
            width={800}
            display="flex"
            justifyContent="left"
            alignItems="left"
            bgcolor="white"
            color="black"
            fontSize={20}
        >
        <TextField
            id="outlined-multiline-static"
            label="Edit Recipe Notes:"
            multiline
            minRows={15.5}
            defaultValue=""
            fullWidth
        />
        </Box>
            <Button variant="contained" onClick={handleEditedNotesSubmit}>Save Notes</Button>
    </div>
    )
}
export default EditRecipe;