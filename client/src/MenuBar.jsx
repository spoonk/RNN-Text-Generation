import React from 'react'
import { models } from './modelData'

/**
 * Lists all possible models that the user may select
 * and allows the user to select any of them
 */
const MenuBar = ({ selectModel, setMenuToggled }) => {
    return (
        <div className="menu-container">
            {
                Object.entries(models).map(model => {
                    return (
                        <div
                            className="menu-item"
                            key={model[0]}
                            onClick={() => {
                                selectModel(model[1])
                                setMenuToggled(false)
                            }}
                        >
                            {model[0]}
                        </div>
                    )
                })
            }
        </div>

    )
}

export default MenuBar