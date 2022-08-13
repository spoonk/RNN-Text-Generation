import OutputArea from "./OutputArea";
import { useState } from 'react'
import React from 'react' // get rid of typescript warning
import InputArea from "./InputArea";
import { models } from './modelData'

function App() {


    const [generatedText, setGeneratedText] = useState("Generated text appears here");
    const [loading, setLoading] = useState(false);
    const [model, setModel] = useState(models["Harry Potter 1-3"]);

    /**
     * Calls the server with the specified parameters
     * @param {string} inputString 
     * @param {number} temperature 
     * @param {number} length 
     */
    const generateText = async (inputString, temperature, length) => {
        // don't fetch if already fetching 
        if (loading) return;
        // fetch from appropriate model, set text
        setLoading(true)
        try {
            const input = inputString.split("").filter(c => model.vocabulary.includes(c) && !['&', '%', '?'].includes(c)).join("")

            const res = await fetch(`http://localhost:8080/${model.route}?query=${" " + input}&temperature=${temperature}&length=${length}`)
            const data = await res.json();


            const text = data.text.split("\n")

            setLoading(false)
            // https://stackoverflow.com/questions/37128624/terse-way-to-intersperse-element-between-all-elements-in-javascript-array
            setGeneratedText([].concat(...text.map(e => [<br />, e])).slice(1))
        } catch (error) {
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
