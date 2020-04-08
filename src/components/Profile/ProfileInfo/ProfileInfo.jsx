import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
      <div>
          <div>
            <img  className={classes.img} src="https://images.wallpaperscraft.ru/image/fon_svet_pyatna_92173_300x168.jpg"></img>
          </div>
          <div className={classes.discriptionInfo}>
            Ava + discription
          </div>
      </div>
          
    )
}
export default ProfileInfo