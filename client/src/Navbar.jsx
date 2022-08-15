import React from 'react'
import NavButton from './NavButton'

// TODO: add button to toggle help screen

/**
 * NavBar holding buttons to choose a model
 * and to toggle the help popup
 */
const Navbar = ({ toggleMenu }) => {
    // toggleMenu: callback to show the list of models to choose from
    return (
        <div className='navbar'>
            <div className="nav-right">
                <NavButton
                    name={"choose model"}
                    callback={toggleMenu}
                />
            </div>
        </div>
    )
}

export default Navbar