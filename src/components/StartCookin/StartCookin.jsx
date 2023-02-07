//With Speechly for continuous listening:
import React, { useState } from 'react';
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import {CopyToClipboard} from 'react-copy-to-clipboard';

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

    return (
        <div>
            <p>Microphone: {listening ? 'on' : 'off'}</p>
                <button onClick={startListening}>Start</button>
                <button onClick={SpeechRecognition.stopListening}>Stop</button>
                <button onClick={resetTranscript}>Reset</button>
            <div>
            <span  value={value}
                onChange={() => setValue(value)}>{transcript}</span>
{/* 
            <CopyToClipboard text={setValue}
                onCopy={() => setIsCopied(true)}>
                <span>Copy to clipboard with span</span>
            </CopyToClipboard> */}

            <CopyToClipboard text={setValue}
                onCopy={() => setIsCopied(true)}>
                <div>
                    <button>Copy to clipboard with button</button>
                </div>
                </CopyToClipboard>

            {isCopied ? <span style={{color: 'red'}}>Copied.</span> : null}
                {/* <p>{transcript}</p> */}
            </div>
        </div>
    );
};

export default StartCookin;