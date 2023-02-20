//With Speechly for continuous listening:
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './StartCookin.css'
import copy from "react-copy-to-clipboard"
import Box from '@material-ui/core/Box';
import Input from '@material-ui/core/Input'
import { NetworkWifiRounded } from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
// import { Button, Snackbar } from '@mui/material'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button'

const StartCookin = () => {
  const [value, setValue] = useState('');
    const [isCopied, setIsCopied] = useState(false);

    const {
        transcript,
        interimTranscript,
        finalTranscript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
        } = useSpeechRecognition();
    const startListening = () => SpeechRecognition.startListening({ continuous: true });

    useEffect(() => {
        if (finalTranscript !== '') {
            console.log('Got the final result:', finalTranscript);
        }
    }, [interimTranscript, finalTranscript]);
    

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    const dispatch = useDispatch();
    const history = useHistory();

    const [authorInput, setAuthorInput] = useState('');
    const [nameInput, setNameInput] = useState('');
    const [ingredientsInput, setIngredientsInput] = useState('');
    const [directionsInput, setDirectionsInput] = useState('');
    const [notesInput, setNotesInput] = useState('');

    const user = useSelector(store => store.user)

    const addNewRecipe = (event) => {
        console.log('user', user.id, user.username, 'adding', nameInput)
            dispatch({
                type: 'SAGA/CREATE_RECIPE',
                payload: {
                recipe_author: authorInput,
                recipe_name: nameInput,
                recipe_ingredients: ingredientsInput,
                recipe_directions: directionsInput,
                recipe_notes: notesInput,
                user_id: user.id
        }
    })
        history.push('/UnfinishedRecipes')
        clearRecipeForm();
    }

    const clearRecipeForm = () => {
        setAuthorInput('');
        setNameInput('');
        setIngredientsInput('');
        setDirectionsInput('')
        setNotesInput('')
    }

    const unfinishedRecipesList = useSelector(store => store.unfinishedRecipesList);

    useEffect(() => {
        dispatch({
            type: 'SAGA/FETCH_UNFINISHED'
        })
    }, []);

    const clickToAutofill = () => {
        setAuthorInput('The Schmidty Wife');
        setNameInput('Simple Spinach Salad');
    }

    return(
        <div>
            <Box
                mx={10}
                my={4}
                border={1}
                px={4}
                py={4}
                borderColor="gray"
                height={44}
                width={620}
                display="flex"
                justifyContent="left"
                alignItems="center"
                bgcolor="white"
                color="black"
                fontSize={16}
            >
                Press Start to begin recording 
                and the microphone will record continuously.
                <br/>
                Press Stop and the recording will pause until it is reset.
                <br />
                Press reset to clear the transcript.
                <br/>
                Make sure to copy the text from the box into 
                the correct input below!
            </Box>
            <Box
                mx={6}
                my={2}
                // border={1}
                px={4}
                py={2}
                // borderColor="green"
                height={2}
                width={820}
                display="flex"
                justifyContent="left"
                alignItems="center"
                bgcolor="white"
                color="black"
                // fontSize={10}
            >
                <h2 className="microphone">Microphone: {listening ? 'on' : 'off'}</h2>
                </Box>
                <Button 
                variant="outline-secondary"
                onClick={startListening}
                >
                Start/Resume
                </Button>
                <Button 
                variant="outline-secondary"
                onClick={SpeechRecognition.stopListening}
                >
                Stop/Pause
                </Button>
                <Button 
                variant="outline-secondary"
                onClick={resetTranscript}
                >
                Reset
                </Button>
            <div>
                {/* <input 
                    type="checkbox" 
                    id="questionOne" 
                    name="subscribe" 
                    value="yes"
                    placeholder="Save this recording?" 
                    checked 
                    /> */}
                <Box
                    mx={10}
                    my={3}
                    border={2}
                    px={2}
                    py={2}
                    borderColor="gray"
                    height={75}
                    width={1020}
                    display="flex"
                    justifyContent="left"
                    alignItems="left"
                    bgcolor="white"
                    color="black"
                    fontSize={14}
                >
                    {transcript}
                </Box>
            </div>
            <h3 onClick={clickToAutofill}>Create New Recipe:</h3>
            <form onSubmit={addNewRecipe}>
            <input
                    type='text'
                    placeholder="Author"
                    value={authorInput}
                    onChange={(evt) => setAuthorInput(evt.target.value)} />
                <input
                    type='text'
                    placeholder="Recipe Name"
                    value={nameInput}
                    onChange={(evt) => setNameInput(evt.target.value)} />
                <InputGroup className="InputGroup">
                    <Form.Control as="textarea" 
                    aria-label="Ingredients"
                    placeholder="Ingredients"
                    onChange={(evt) => setIngredientsInput(evt.target.value)}
                    rows={6}
                    width={100}
                    htmlSize={20}
                    />
                </InputGroup>
                <InputGroup>
                    {/* <InputGroup.Text>With textarea</InputGroup.Text> */}
                    <Form.Control as="textarea" 
                    aria-label="Directions"
                    placeholder="Directions"
                    onChange={(evt) => setDirectionsInput(evt.target.value)}
                    rows={6}
                    />
                </InputGroup>
                <InputGroup>
                    {/* <InputGroup.Text>With textarea</InputGroup.Text> */}
                    <Form.Control as="textarea" 
                    aria-label="Notes"
                    placeholder="Notes"
                    onChange={(evt) => setNotesInput(evt.target.value)}
                    rows={6}
                    />
                </InputGroup>
                {/* <input
                    type='text'
                    placeholder="Ingredients"
                    value={ingredientsInput}
                    onChange={(evt) => setIngredientsInput(evt.target.value)} />
                <input
                    type='text'
                    placeholder="Directions"
                    value={directionsInput}
                    onChange={(evt) => setDirectionsInput(evt.target.value)} />
                <input
                    type='text'
                    placeholder="Notes"
                    value={notesInput}
                    onChange={(evt) => setNotesInput(evt.target.value)} /> */}
                <Button 
                variant="outline-secondary"
                type='submit' 
                // value='Add New Recipe'
                // placeholder='Add New Recipe'
                >
                Add New Recipe
                </Button>
            </form>
        </div> 
    );
};

export default StartCookin;