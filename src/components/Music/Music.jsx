import React from 'react';
import classes from './Music.module.css';

const Music = (props) => {
    return (
        <div>
            <div>
                <audio src="./Infiltration_Device.mp3" controls></audio>
            </div>
            <div>
                <img className={classes.music} src="https://i0.wp.com/itc.ua/wp-content/uploads/2019/09/Apple-Music-Android.jpg?fit=920%2C613&quality=100&strip=all&ssl=1"></img>
            </div>
        </div>
        
    )
}

export default Music