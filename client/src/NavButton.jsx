import React from 'react'

/**
 * Button in navbar that sends
 * true to the callback when clicked
 */
const NavButton = ({ name, callback }) => {
    return (
        <div
            className='nav-button'
            onClick={() => {
                callback(true)
            }}
        >
            {name}
        </div>
    )
}

export default NavButton