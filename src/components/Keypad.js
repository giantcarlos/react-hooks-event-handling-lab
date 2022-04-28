// Code Keypad Component Here
import React from 'react';

function Keypad() {
    function handleChange(event) {
        console.log('Entering password...')
    }

    return (
        <form onChange={handleChange}>
            <input type="password" />
        </form>
    )
}

export default Keypad;