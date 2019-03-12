import React from 'react'

function ColorPicker(props) {
    return (
        <div>
            <button onClick = { () => props.handleColorClick('green')}>green</button>
            <button onClick = { () => props.handleColorClick('gold')}>gold</button>
            <button onClick = { () => props.handleColorClick('red')}>red</button>
            <button onClick = { () => props.handleColorClick('purple')}>purple</button>
            <button onClick = { () => props.handleColorClick('blue')}>blue</button>
            <button onClick = { () => props.handleColorClick('black')}>black</button>
       </div>
    )
}

export default ColorPicker