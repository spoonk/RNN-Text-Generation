import React from 'react'
import Navbar from './Navbar'
import Input from './Input'
import MenuBar from './MenuBar'
import { useState } from 'react'

/**
 * Provides inputs to the user so they may
 * select their input string and temperatures
 */
const InputArea = ({ model, generateText, selectModel }) => {
    // for the dropdown menu
    const [menuToggled, setMenuToggled] = useState(false)

    return (
        <div className={`input-area ${model.background}`}>
            {/* house everything in pair and inner-pair so we can get the sliding effect
                when choosing the model */}
            <div className="pair">
                <div className={`inner-pair ${menuToggled ? 'show' : 'hide'}`}>
                    <MenuBar
                        selectModel={selectModel}
                        setMenuToggled={setMenuToggled}
                    />
                    <div className={`input-container`}>
                        <Navbar
                            toggleMenu={setMenuToggled}
                        />
                        <div className='input-main'>
                            <h1 className='model-name'>
                                {model.name}
                            </h1>
                            <Input
                                generateText={generateText}
                                modelVocab={model.vocabulary}
                            />
                            <div className="vocabulary-section">
                                <h1 className='model-vocabulary'>Vocabulary</h1>
                                <div className="vocabulary">
                                    {/* reduces the array of characters to a string
                                        of comma-separated characters   */}
                                    [{
                                        model.vocabulary.reduce((prev, curr, index) => {
                                            return `${prev}, ${curr}`
                                        })
                                    }]
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default InputArea