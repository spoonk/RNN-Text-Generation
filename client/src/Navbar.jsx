import React from 'react'
import NavButton from './NavButton'

/**
 * NavBar holding buttons to choose a model
 * and to toggle the help popup
 */
const Navbar = ({ toggleMenu, toggleHelp }) => {
    // toggleMenu: callback to show the list of models to choose from
    return (
        <div className='navbar'>
            <div className="nav-right">
                <NavButton
                    name={"choose model"}
                    callback={toggleMenu}
                />
                <NavButton
                    name={"help"}
                    callback={toggleHelp}
                />
            </div>

        </div>
    )
}

export default Navbar