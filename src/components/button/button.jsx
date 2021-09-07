import React from 'react'
import './button.css'
function Button(props) {
    return (
        <>
            <button className="general_btn" >
                {props.name}
            </button>
        </>
    )
}

export default Button
