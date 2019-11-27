import React from 'react'
import './character.css'

const Character = (props) => {
    
    return(
        <div className="character">
            <img src={props.img} alt={"The Character: " + props.name} />
            <h3>{props.name}</h3>
            <hr />
            <p>
                {props.gender}<br />
                {props.status}<br />
                {props.origin}<br />
            </p>
        </div>
    )
}

export default Character