import React from 'react'

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
                                {val < 10 ? val.toFixed(1) : val}
                            </div>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default DropDownSelect