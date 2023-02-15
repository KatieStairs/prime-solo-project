//With Speechly for continuous listening:
import React, { useState } from 'react';
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './StartCookin.css'
import copy from "react-copy-to-clipboard"
import Box from '@material-ui/core/Box';

const appId = '563883d9-0e49-4424-8574-fdc92a4a7cbb';
// const appId = process.env.SPEECHLY_API_KEY
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

const StartCookin = () => {
    const [value, setValue] = useState('');
    const [isCopied, setIsCopied] = useState(false);

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
        } = useSpeechRecognition();
    const startListening = () => SpeechRecognition.startListening({ continuous: true });

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    const [copyText, setCopyText] = useState('');

    const handleCopy = () => {
        navigator.clipboard.writeText(copyText)
        alert("Copied")
    }

    const handlePaste = () => {
        return {transcript}
    }


    return (
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