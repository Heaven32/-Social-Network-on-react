import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {
  if(!props.profile) {
    return <Preloader />
  } 
  
  return (
      <div>
          <div className={classes.discriptionInfo}>
            <div className={classes.info_border}>
              <img src={props.profile.photos.large}/>
              <ProfileStatus status="hello" />
              <div>Полное имя: {props.profile.fullName}</div>
              <div>Статус поиска работы: {props.profile.lookingForAJobDescription}</div>
              <div>Контакты: {props.profile.contacts.facebook}</div> 
            </div>
          </div>
      </div>
          
    )
}
export default ProfileInfo