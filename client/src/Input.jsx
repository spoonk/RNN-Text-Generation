import React from 'react'
import { useState } from 'react'
import DropDownSelect from './DropDownSelect'


const Input = ({ generateText, modelVocab }) => {

    // 
    const [entry, setEntry] = useState("")
    const [temperature, setTemperature] = useState(1.0)
    const length = 500;

    // toggling dropdown 
    const [tempHidden, setTH] = useState(true)
    const toggleTemp = () => { setTH(!tempHidden) }

    const handleSubmit = (e) => {
        e.preventDefault();
        generateText(entry, temperature, length)
    }


    const handleChange = (e) => {
        let value = e.target.value;
        let characters = value.split("")
        let filteredChars = characters.filter(c => modelVocab.includes(c) && !['&', '%'].includes(c)).join("")
        setEntry(filteredChars.substring(0, 50))
    }

    return (
        <div className='input'>

            <form
                onSubmit={handleSubmit}
                className={`input-sequence-container`}
            >
                <label className={
                    `input-label 
                    ${entry === "" ? 'label-big' : 'label-small'}`
                }>
                    input sequence
                </label>
                <input
                    className={`input-sequence`}
                    type={"text"}
                    value={entry}
                    onChange={handleChange}
                />
            </form>

            <div className="params">
                <DropDownSelect
                    selected={temperature}
                    chooseValue={setTemperature}
                    values={[0.1, 0.5, 1.0, 1.5, 2.0, 3.0, 4.0, 5.0]}
                    toggleDD={toggleTemp}
                    label={"temp"}
                    hidden={tempHidden}
                    childNum="first"
                />
                <div
                    className="generate-button"
                    onClick={() => {
                        generateText(entry, temperature, length);
                    }}
                >
                    generate
                </div>

            </div>

        </div>
    )
}

export default Input