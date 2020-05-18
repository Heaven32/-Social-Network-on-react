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
            <img  className={classes.img} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/foggy-545838_960_720.jpg"></img>
          </div>
          <div className={classes.discriptionInfo}>
            <div className={classes.info_border}>
              <img src={props.profile.photos.large}/>
              <div>Полное имя: {props.profile.fullName}</div>
              <div>Статус поиска работы: {props.profile.lookingForAJobDescription}</div>
              <div>Контакты: {props.profile.contacts.facebook}</div> 
            </div>
            <div>Ava + discription</div>
          </div>
      </div>
          
    )
}
export default ProfileInfo