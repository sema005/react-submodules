import React, {useState} from 'react'
import mtv from '../files/mtv'
import LocalJSONSubModule from './LocalJSONSubModule'
import './LocalJSONModule.css'

const LocalJSONModule = () => {
    const [videos, setVideos] = useState(mtv.videos)
    const filterSong = (e) => {
        setVideos(
            mtv.videos.filter( 
                video => video.song.toLocaleLowerCase().includes(e.target.value) )
        )
    }
    return(
        <div className='submodule local-json'>
            <h2>This module uses data from a local JSON file</h2>
            <p>And the videos on the first MTV broadcast was:</p>
            <input type="text" placeholder="Search after song" onInput={filterSong} />
            <div className="videos">
            {
                videos.map(
                (video, i) => <LocalJSONSubModule 
                        song={video.song}
                        artist={video.artist}
                        number={video.number}
                        appearance={video.appearance}
                        key={i}
                />
                )
            }
            </div>
        </div>
    )
}

export default LocalJSONModule