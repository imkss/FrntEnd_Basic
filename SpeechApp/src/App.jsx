import "./App.css";
import React from "react";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";
import { useState } from "react";

function App() {
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy, {
    successDuration: 1000,
  });

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <>
     <div class="d-flex flex-column justify-content-center w-100 h-100">
      <div className="container">
        <h2>Speech to Text Converter</h2>
        <br />
        <p>
          The tool uses High-End AI technology to convert spoken words into
          texts with 100% accuracy. It is a revolution in the field of speech
          recognition. It saves a lot of time and boosts your productivity.
        </p>

        <div className="main-content" onClick={() => setTextToCopy(transcript)}>
          {transcript}
        </div>

        <div className="btn-style">
          <button onClick={setCopied}>
            {isCopied ? "Copied!" : "Copy to Clipboard"}
          </button>
          <button onClick={startListening}>Start Listening</button>
          <button onClick={SpeechRecognition.stopListening}>
            Stop Listening
          </button>
        </div>
        <footer className="ftr">
          <p>
            Designed & Maintained with ❤ by Sunny
            <br />
            &copy; 2023 All rights reserved
          </p>
        </footer>
      </div>
      </div>
    </>
  );
}

export default App;
