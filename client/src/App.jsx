import OutputArea from "./OutputArea";
import { useState } from 'react'
import React from 'react' // get rid of typescript warning
import InputArea from "./InputArea";
import { models } from './modelData'


/**
 * Top-level Container for the application. 
 * Fetches generated text from server
 */
function App() {
    const [generatedText, setGeneratedText] = useState("Generated text appears here");
    const [loading, setLoading] = useState(false);
    const [model, setModel] = useState(models["Harry Potter 1-3"]);

    /**
     * Sends inputString, temperature, and length to the server,
     * requesting a generated sequence using the current model
     * @param {string} inputString the starting text used to predict the rest of sequence
     * @param {number} temperature how unpredictable the output is 
     * @param {number} length number total characters in output
     */
    const generateText = async (inputString, temperature, length) => {
        // prevent multiple requests to server
        if (loading) return;
        // indicate to user that something is happening
        setLoading(true)
        try {
            // filter out disallowed characters (again) before sending
            const input = inputString.split("").filter(c => model.vocabulary.includes(c) && !['&', '%', '?'].includes(c)).join("")
            const res = await fetch(`http://localhost:8080/${model.route}?query=${" " + input}&temperature=${temperature}&length=${length}`)
            const data = await res.json();

            // replace \n with <br />, since \n doesn't render right in HTML (I think)
            const text = data.text.split("\n")
            // https://stackoverflow.com/questions/37128624/terse-way-to-intersperse-element-between-all-elements-in-javascript-array
            setGeneratedText([].concat(...text.map(e => [<br />, e])).slice(1))
        } catch (error) {
            // if something messed up when fetching
            console.log(error)
            setGeneratedText("error communicating with server :(")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className={`app-container`}>
            <InputArea
                selectModel={setModel}
                model={model}
                generateText={generateText}
            />
            <OutputArea
                loading={loading}
                text={generatedText}
            />
        </div>
    );
}

export default App;
