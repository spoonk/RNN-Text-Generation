import React from 'react'
import ReactLoading from 'react-loading'

const OutputArea = ({ text, loading }) => {
    return (
        <div className='output-container'>
            <div className='output-text-container'>
                {loading ?
                    <ReactLoading
                        // bars is my favorite right now
                        type="bars"
                        color='black'
                    />
                    :
                    <div className="generated-output">
                        {text !== "Generated text appears here" &&
                            <div className="length-disclaimer">500 characters</div>
                        }
                        {text}
                    </div>
                }
            </div>
        </div>
    )
}

export default OutputArea