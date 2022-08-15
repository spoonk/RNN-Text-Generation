import React from 'react'

/**
 * A dropdown menu that allows the user to select from 
 * a list of values
 */
const DropDownSelect = ({ selected, values, hidden, chooseValue, toggleDD, label, childNum }) => {
    return (
        <div className={`dropdown ${childNum}`}>
            <div className="dd-label">
                {label}
            </div>
            <div
                className="dropdown-button"
                onClick={toggleDD}
            >
                {/* large numbers shouldn't have a decimal place */}
                {selected < 10 ? selected.toFixed(1) : selected}
            </div>
            <div className={`dd-values ${hidden ? 'hide' : 'show'}`}>
                <div className="dd-values-container">
                    {values.map(val => {
                        return (
                            <div
                                key={val}
                                className='dropdown-option'
                                onClick={() => {
                                    toggleDD();
                                    chooseValue(val);
                                }}
                            >
                                {/* large numbers shouldn't have a decimal place */}
                                {val < 10 ? val.toFixed(1) : val}
                            </div>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default DropDownSelect