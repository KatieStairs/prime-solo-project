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
import { Button, Snackbar } from '@mui/material'

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
            <Box
                mx={1}
                my={1}
                border={1}
                px={1}
                py={1}
                borderColor="aqua"
                height={50}
                width={320}
                display="flex"
                justifyContent="left"
                alignItems="left"
                bgcolor="white"
                color="black"
                fontSize={10}
            >
                Press Start to begin recording 
                and the microphone will record continuously. 
                Otherwise, you can press reset to clear the transcript
                MAKE SURE YOU HAVE COPIED YOUR 
                RECIPE TO THE CLIPBOARD BEFORE RESETTING.
            </Box>
                <h3>Microphone: {listening ? 'on' : 'off'}</h3>
                    <button onClick={startListening}>Start/Resume</button>
                    <button onClick={SpeechRecognition.stopListening}>Stop/Pause</button>
                    <button onClick={resetTranscript}>Reset</button>
            <div>
                <Box
                    mx={6}
                    my={3}
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
                    {transcript}
                </Box>
            
            </div>
        </div>
    );
};

export default StartCookin;