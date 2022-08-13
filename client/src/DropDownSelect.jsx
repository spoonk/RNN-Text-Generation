import React from 'react'

const DropDownSelect = ({ selected, values, hidden, chooseValue, toggleDD, label, childNum }) => {
    return (
        <div className={`dropdown ${childNum}`}>
            <div className="dd-label">
                {label}
                <i class="fa-regular fa-circle-question help-icon"></i>
                <div className="help-popup">
                    How unpredictable the generated text is. Lower values lead to more common
                    outputs and higher values lead to less likely outputs
                </div>
            </div>
            <div
                className="dropdown-button"
                onClick={toggleDD}
            >
                {selected < 10 ? selected.toFixed(1) : selected}
            </div>
            <div className="dd-values-container">
                <div className={`dd-values ${hidden ? 'hide' : 'show'}`}>
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