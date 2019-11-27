import React, {useState} from 'react'
import RickMorty from '../files/rickmorty'
import Character from './character'


const Characters = () => {

    const [characters, setCharacters] = useState(RickMorty.results)
    const filtercharacter = (e) => {
        setCharacters(
            RickMorty.results.filter( 
                rick => rick.name.toLocaleLowerCase().includes(e.target.value) )
        )
            }
    
    return(
        <div className='submodule'>
            <h2>This module presents characters from Rick and Morty</h2>
            <input type="text" placeholder="Search after character" onInput={filtercharacter} />
            <div className="rickmorty">
            {
                characters.map(
                    (c, i) => 
                        <Character origin={c.origin.name} key={i} name={c.name} img={c.image} gender={c.gender} status={c.status} />
                    
                )
            }
            </div>
        </div>
    )
}

export default Characters