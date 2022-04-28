// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe() {
    function handleFocus(event) {
        if (event.type === 'blur'){
            console.log('Hey! Eyes on me!')
        }
        else if (event.type === 'focus'){
            console.log('Good!')
        }
    }

    return (
        <button onFocus={handleFocus} onBlur={handleFocus}>Eyes on me!</button>
    )
}

export default EyesOnMe;