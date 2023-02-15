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

    // const [newId, setNewId] = useState(6)
    // const recipeToEdit = useSelector((store) => store.recipeToEdit);

    // // const handleIngredientsSubmit = (event) => {
    // //     event.preventDefault();
    // //     dispatch({
    // //         type: 'ADD_INGREDIENTS',
    // //         payload: ingredientsInput
    // //     })
    // // }

    // const dispatch = useDispatch();
    // const history = useHistory();

    // const [ingredientsInput, setIngredientsInput] = useState('')
    // const [directionsInput, setDirectionsInput] = useState('')
    // const [notesInput, setNotesInput] = useState('')

    // const handleNewRecipeSubmit = (event) => {
    //     event.preventDefault();
    //     dispatch({
    //         type: 'CREATE_RECIPE',
    //         payload: ingredientsInput
    //     })
    // }

    // console.log('*********', transcript)

    // const handleRecipeIngredientsSubmit = (event) => {
    //     event.preventDefault();
    //     const recipeObject = {recipe_id: NewId, recipe_ingredients: finalTranscript}
    //     dispatch({
    //         type: 'UPDATE_RECIPE_INGREDIENTS',
    //         payload: recipeObject
    //     })
    //     history.push('/EditRecipe')
    // }

    // const goToEditPage = (event) => {
    //     event.preventDefault();
    //     history.push('/EditRecipe')
    // }

    // const handleDirectionsSubmit = (event) => {
    //     event.preventDefault();
    //     dispatch({
    //         type: 'ADD_DIRECTIONS',
    //         payload: directionsInput
    //     })
    // }

    // const handleNotesSubmit = (event) => {
    //     event.preventDefault();
    //     dispatch({
    //         type: 'ADD_NOTES',
    //         payload: notesInput
    //     })
    // }

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
            {/* <div>
              <span  value={value} 
                onChange={() => setValue(value)}>{transcript}</span>
            </div> */}
            {/* <form>
              <Input 
                type="text"
                value={{transcript} || ingredientsInput}
                onChange={handleIngredientsChange}
              />
              <button onClick={handleRecipeIngredientsSubmit}>Recipe Ingredients Submit</button>
            </form> */}
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
            <input
              type='text'
              placeholder="Directions"
              value={directionsInput}
              onChange={(evt) => setDirectionsInput(evt.target.value)} />
            <input
              type='text'
              placeholder="Notes"
              value={notesInput}
              onChange={(evt) => setNotesInput(evt.target.value)} />
            <input type='submit' value='Add New Recipe' />
        </form>
            <form onSubmit={addNewRecipe}>
              <Box onChange={(event) => setIngredientsInput(event.target.value)}
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
              <Input
              type='text'
              placeholder="Ingredients"
              value={transcript}
              onChange={(evt) => setIngredientsInput(evt.target.value)} />
              </Box>
              {/* <Button variant="contained" type="submit" onClick={goToEditPage}>Copy to Your Clipboard! Then: Edit Here</Button> */}
              <Box onChange={(event) => setDirectionsInput(event.target.value)}
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
              Recipe Directions:
              </Box>
              {/* <Button variant="contained">Copy to Your Clipboard! Then: Edit Here</Button> */}
              <Box onChange={(event) => setNotesInput(event.target.value)}
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
              Recipe Notes:
              </Box>
              {/* <Button variant="contained">Copy to Your Clipboard! Then: Edit Here</Button> */}
            </form>
    </div>
    )
}
    {/* <form onSubmit={handleDirectionsSubmit}>
              <Box onChange={(event) => setDirectionsInput(event.target.value)}
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
                Recipe Directions:
                </Box>
                <Button variant="contained">Copy to Your Clipboard! Then: Edit Here</Button>
              </form>
              <form onSubmit={handleNotesSubmit}>
                <Box onChange={(event) => setNotesInput(event.target.value)}
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
                Recipe Notes:
                </Box>
                <Button variant="contained">Copy to Your Clipboard! Then: Edit Here</Button>
              </form>  */}
              {/* <input value={transcript} 
                onChange={(e)=>setCopyText(e.target.value)} />
              <button onClick={handleCopy}>Copy</button>
              <input value={value} readOnly></input>
              <button onClick={handlePaste}>Paste</button>
              <div className="Container">
                 <input className="Input1" readOnly 
                     type="text" 
                     value={value} 
                     // onChange={handleCopyText} 
                     placeholder=''/>
    
                 <button className="clipboardButton"onClick={copyToClipboard}>
                     Copy to Clipboard
                 </button>
    
                 <input className="Input2" 
                     type="text" 
                     placeholder='Enter the text you have copied' />
            </div> */}
        {/* <h3>Create New Recipe:</h3>
        <form onSubmit={addNewRecipe}>
            <input
              type='text'
              placeholder="Author"
              value={authorInput}
              onChange={(evt) => setAuthorInput(evt.target.value)} />
            <input
              type='text'
              placeholder="Name"
              value={nameInput}
              onChange={(evt) => setNameInput(evt.target.value)} />
            <input
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
              onChange={(evt) => setNotesInput(evt.target.value)} />
            <input type='submit' value='Add New Recipe' />
        </form>
        <ul>
          {unfinishedRecipesList.map((unfinished) => {
            return <li key={unfinished.recipe_id}>{unfinished.recipe_name}</li>
          })}
        </ul>
        </div> */}

//     )
// }

// const appId = '563883d9-0e49-4424-8574-fdc92a4a7cbb';
// // const appId = process.env.SPEECHLY_API_KEY
// const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
// SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

// const StartCookin = () => {
//     const [value, setValue] = useState('');
//     const [isCopied, setIsCopied] = useState(false);

//     const {
//         transcript,
//         interimTranscript,
//         finalTranscript,
//         listening,
//         resetTranscript,
//         browserSupportsSpeechRecognition
//         } = useSpeechRecognition();
//     const startListening = () => SpeechRecognition.startListening({ continuous: true });

//     useEffect(() => {
//         if (finalTranscript !== '') {
//             console.log('Got the final result:', finalTranscript);
//         }
//     }, [interimTranscript, finalTranscript]);
    

//     if (!browserSupportsSpeechRecognition) {
//         return <span>Browser doesn't support speech recognition.</span>;
//     }

//     // const [newId, setNewId] = useState(6)
//     const recipeToEdit = useSelector((store) => store.recipeToEdit);

//     // const handleIngredientsSubmit = (event) => {
//     //     event.preventDefault();
//     //     dispatch({
//     //         type: 'ADD_INGREDIENTS',
//     //         payload: ingredientsInput
//     //     })
//     // }

//     const dispatch = useDispatch();
//     const history = useHistory();

//     const [ingredientsInput, setIngredientsInput] = useState('')
//     const [directionsInput, setDirectionsInput] = useState('')
//     const [notesInput, setNotesInput] = useState('')

//     const handleNewRecipeSubmit = (event) => {
//         event.preventDefault();
//         dispatch({
//             type: 'CREATE_RECIPE',
//             payload: ingredientsInput
//         })
//     }

//     console.log('*********', transcript)

//     const handleRecipeIngredientsSubmit = (event) => {
//         event.preventDefault();
//         const recipeObject = {recipe_id: NewId, recipe_ingredients: finalTranscript}
//         dispatch({
//             type: 'UPDATE_RECIPE_INGREDIENTS',
//             payload: recipeObject
//         })
//         history.push('/EditRecipe')
//     }

//     const goToEditPage = (event) => {
//         event.preventDefault();
//         history.push('/EditRecipe')
//     }

//     const handleDirectionsSubmit = (event) => {
//         event.preventDefault();
//         dispatch({
//             type: 'ADD_DIRECTIONS',
//             payload: directionsInput
//         })
//     }

//     const handleNotesSubmit = (event) => {
//         event.preventDefault();
//         dispatch({
//             type: 'ADD_NOTES',
//             payload: notesInput
//         })
//     }


//     return (
//         <div>
//             <div className="speechToText">
//                 <h4 className="instructions">Press Start to begin recording 
//                 and the microphone will record continuously. 
//                 <br></br>
//                 If you would like to Pause, click the Pause button. 
//                 <br></br>
//                 To resume, click the Start button again.
//                 <br></br>
//                 Otherwise, you can press reset to clear the transcript</h4>
//                 <h4 className="warning">MAKE SURE YOU HAVE COPIED YOUR 
//                 RECIPE TO THE CLIPBOARD BEFORE RESETTING.</h4>
//                 <h3>Microphone: {listening ? 'on' : 'off'}</h3>
//                     <button onClick={startListening}>Start/Resume</button>
//                     <button onClick={SpeechRecognition.stopListening}>Stop/Pause</button>
//                     <button onClick={resetTranscript}>Reset</button>
//             </div>
//             {/* <div>
//             <span  value={value} 
//                 onChange={() => setValue(value)}>{transcript}</span>
//             </div> */}
//             {/* <form>
//                 <Input 
//                     type="text"
//                     value={{transcript} || ingredientsInput}
//                     onChange={handleIngredientsChange}
//                 />
//                 <button onClick={handleRecipeIngredientsSubmit}>Recipe Ingredients Submit</button>
//             </form> */}
//             <form onSubmit={handleNewRecipeSubmit}>
//                 <Box onChange={(event) => setIngredientsInput(event.target.value)}
//                     mx={6}
//                     my={3}
//                     border={4}
//                     px={2}
//                     py={3}
//                     borderColor="black"
//                     height={300}
//                     width={800}
//                     display="flex"
//                     justifyContent="left"
//                     alignItems="left"
//                     bgcolor="white"
//                     color="black"
//                     fontSize={20}
//                 >
//                     Recipe: 
//                     {transcript}
//                     <input 
//                         type="text"
//                         value={}
//                         onChange={handleRecipeNotesChange}
//                     />
//                 </Box>
//                 <Button variant="contained" type="submit" onClick={goToEditPage}>Copy to Your Clipboard! Then: Edit Here</Button>
//                 <Box onChange={(event) => setDirectionsInput(event.target.value)}
//                     mx={6}
//                     my={3}
//                     border={4}
//                     px={2}
//                     py={3}
//                     borderColor="black"
//                     height={300}
//                     width={800}
//                     display="flex"
//                     justifyContent="left"
//                     alignItems="left"
//                     bgcolor="white"
//                     color="black"
//                     fontSize={20}
//                 >
//                     Recipe Directions:
//                 </Box>
//                 {/* <Button variant="contained">Copy to Your Clipboard! Then: Edit Here</Button> */}
//                 <Box onChange={(event) => setNotesInput(event.target.value)}
//                     mx={6}
//                     my={3}
//                     border={4}
//                     px={2}
//                     py={3}
//                     borderColor="black"
//                     height={300}
//                     width={800}
//                     display="flex"
//                     justifyContent="left"
//                     alignItems="left"
//                     bgcolor="white"
//                     color="black"
//                     fontSize={20}
//                 >
//                     Recipe Notes:
//                 </Box>
//                 {/* <Button variant="contained">Copy to Your Clipboard! Then: Edit Here</Button> */}
//                 </form>

//                 {/* <form onSubmit={handleDirectionsSubmit}>
//                 <Box onChange={(event) => setDirectionsInput(event.target.value)}
//                     mx={6}
//                     my={3}
//                     border={4}
//                     px={2}
//                     py={3}
//                     borderColor="black"
//                     height={300}
//                     width={800}
//                     display="flex"
//                     justifyContent="left"
//                     alignItems="left"
//                     bgcolor="white"
//                     color="black"
//                     fontSize={20}
//                 >
//                     Recipe Directions:
//                 </Box>
//                 <Button variant="contained">Copy to Your Clipboard! Then: Edit Here</Button>
//                 </form>
//                 <form onSubmit={handleNotesSubmit}>
//                 <Box onChange={(event) => setNotesInput(event.target.value)}
//                     mx={6}
//                     my={3}
//                     border={4}
//                     px={2}
//                     py={3}
//                     borderColor="black"
//                     height={300}
//                     width={800}
//                     display="flex"
//                     justifyContent="left"
//                     alignItems="left"
//                     bgcolor="white"
//                     color="black"
//                     fontSize={20}
//                 >
//                     Recipe Notes:
//                 </Box>
//                 <Button variant="contained">Copy to Your Clipboard! Then: Edit Here</Button>
//             </form> */}
//                 {/* <input value={transcript} 
//                     onChange={(e)=>setCopyText(e.target.value)} />
//                 <button onClick={handleCopy}>Copy</button>
//                 <input value={value} readOnly></input>
//                 <button onClick={handlePaste}>Paste</button> */}
//             {/* <div className="Container">
//                 <input className="Input1" readOnly 
//                     type="text" 
//                     value={value} 
//                     // onChange={handleCopyText} 
//                     placeholder=''/>
    
//                 <button className="clipboardButton"onClick={copyToClipboard}>
//                     Copy to Clipboard
//                 </button>
    
//                 <input className="Input2" 
//                     type="text" 
//                     placeholder='Enter the text you have copied' />
//             </div> */}
            
//             {/* <span className="fakeInput">
//                 <input type="text" value={transcript} readOnly/>
//                 <a href="#">{value}</a>
//             </span> */}

//             {/* <CopyToClipboard text={setValue}
//                 onCopy={() => setIsCopied(true)}>
//                 <span>Copy to clipboard with span</span>
//             </CopyToClipboard>

//             <CopyToClipboard text={setValue}
//                 onCopy={() => setIsCopied(true)}>
//                 <div>
//                     <button>Copy to clipboard with button</button>
//                 </div>
//                 </CopyToClipboard>

//             {isCopied ? <span style={{color: 'red'}}>Copied.</span> : null}
//                 {/* <p>{transcript}</p> */}
//                 {/* <button
//                     data-paste="selector"
//                     data-done="paste sucessful"
//                 >paste</button> */}
//         </div>
//     );
// };

export default StartCookin;