import React, {useState} from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import './ChecklistSubmodule.css'

const ChecklistSubmodule = (props) => {
    const [checked, setChecked] = useState(false)
    const checkMe = () => {
        setChecked(!checked)
    }
    return(
        <div className='submodule checklist-item'>
           <li className={ checked ? 'checked' : '' } >{props.todo} </li>
            <AiOutlineDelete className="remove" onClick={() => props.remove(props.myNumber)}/>
            <input type="checkbox" onClick={checkMe} />
        </div>
    )
}

export default ChecklistSubmodule