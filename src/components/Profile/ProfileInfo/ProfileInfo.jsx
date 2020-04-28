import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';


const ProfileInfo = (props) => {
  if(!props.profile) {
    return <Preloader />
  } 
  
  return (
      <div>
          <div>
            <img  className={classes.img} src="https://images.wallpaperscraft.ru/image/fon_svet_pyatna_92173_300x168.jpg"></img>
          </div>
          <div className={classes.discriptionInfo}>
            <img src={props.profile.photos.large}/>
            Ava + discription
          </div>
      </div>
          
    )
}
export default ProfileInfo