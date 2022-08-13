import React from 'react'

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