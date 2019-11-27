import React from 'react'

const DefaultPropsModule = (props) => {

    return(
        <div className='submodule'>
            <h2>Basic props submodule</h2>
            <p>This is a module that receives a property from its parent (App.js). And the prop is: <b>{props.value}</b> - but wait, there´s no property</p>
            <p>Instead we can give the submodule a default prop:    <b>{props.value || 'i am a default value'}</b></p>
        </div>
    )
}

export default DefaultPropsModule