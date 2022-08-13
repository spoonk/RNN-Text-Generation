import React from 'react'
import NavButton from './NavButton'

const Navbar = ({ toggleMenu }) => {
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