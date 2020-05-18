import React from 'react';
import classes from './Music.module.css';

const Music = (props) => {
    return (
        <div>
            <div>
                <audio src="./Infiltration_Device.mp3" controls></audio>
            </div>
            <div>
                <img className={classes.music} src="https://russianchicagomag.com/wp-content/uploads/2014/02/brainmusic.jpg"></img>
            </div>
        </div>
        
    )
}

export default Music