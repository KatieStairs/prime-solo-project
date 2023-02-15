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
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import { NetworkWifiRounded } from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';

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

    return(
        <div>
          <div className="speechToText">
            <h4 className="instructions">Press Start to begin recording 
                and the microphone will record continuously. 
              <br></br>
                If you would like to Pause, click the Pause button. 
              <br></br>
                To resume, click the Start button again.
              <br></br>
                Otherwise, you can press reset to clear the transcript</h4>
            <h4 className="warning">MAKE SURE YOU HAVE COPIED YOUR 
                RECIPE TO THE CLIPBOARD BEFORE RESETTING.</h4>
            <h3>Microphone: {listening ? 'on' : 'off'}</h3>
              <button onClick={startListening}>Start/Resume</button>
              <button onClick={SpeechRecognition.stopListening}>Stop/Pause</button>
              <button onClick={resetTranscript}>Reset</button>
          </div>
            <h3>Create New Recipe:</h3>
            <form onSubmit={addNewRecipe}>
            <input
              type='text'
              placeholder="Recipe Author"
              value={authorInput}
              onChange={(evt) => setAuthorInput(evt.target.value)} />
            <input
              type='text'
              placeholder="Recipe Name"
              value={nameInput}
              onChange={(evt) => setNameInput(evt.target.value)} />
            {/* <input
              type='text'
              placeholder="Directions"
              value={directionsInput}
              onChange={(evt) => setDirectionsInput(evt.target.value)} />
            <input
              type='text'
              placeholder="Notes"
              value={notesInput}
              onChange={(evt) => setNotesInput(evt.target.value)} /> */}
            {/* <input type='submit' value='Add New Recipe' /> */}
        </form>
            <form onSubmit={addNewRecipe}>
              <h4>Voice Notes</h4>
              <Box //onChange={(event) => setIngredientsInput(event.target.value)}
                mx={6}
                my={3}
                border={4}
                px={2}
                py={3}
                borderColor="black"
                height={200}
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
                label=""
                multiline
                minRows={1.5}
                defaultValue={transcript}
                fullWidth
              />
              <Button onClick={(event) => setIngredientsInput(event.target.value)}>Ingredients</Button>
              <Button onClick={(event) => setDirectionsInput(event.target.value)}>Directions</Button>
              <Button onClick={(event) => setNotesInput(event.target.value)}>Notes</Button>
              <input type='submit' value='Add New Recipe' />
              {/* <Input
              type='text'
              placeholder="Ingredients"
              value={transcript}
              onChange={(evt) => setIngredientsInput(evt.target.value)} /> */}
              </Box>
              {/* <Button onClick={(event) => setIngredientsInput(event.target.value)}>Ingredients</Button>
              <Button onClick={(event) => setDirectionsInput(event.target.value)}>Directions</Button>
              <Button onClick={(event) => setNotesInput(event.target.value)}>Notes</Button>
              <input type='submit' value='Add New Recipe' /> */}
              </form>
            </div>
  )
}

export default StartCookin;