import React, {useState} from 'react'

const BasicStateModule = () => {
    const [count, setCount] = useState(0)
    return(
        <div className='submodule'>
            <h2>This is a module whit state</h2>
            <p>State is very fast way to update certain on a webpage. Whitout rendering all the html and css. Take this number for example: <b>{count}</b></p>
            <button onClick={ () => setCount(count + 1) }>Hit me to count</button>
        </div>
    )
}

export default BasicStateModule