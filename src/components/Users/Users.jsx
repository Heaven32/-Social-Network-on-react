import React from 'react';
import userPhoto from '../../assets/images/images.png';
import classes from './Users.module.css';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';

let Users = (props) => {
   
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for(let i = 1; i <= pagesCount; i ++) {
        pages.push(i);
    }
  
  return  <div>
                <div>
                    {pages.map( p => {
                        return <span className={props.currentPage === p && classes.selectedPage}
                        onClick={ (e) => {props.onPageChanged(p);}} >{p}</span>
                    })}
                </div>
                {
                props.users.map( u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img className={classes.img_ava} src={ u.photos.small != null ? u.photos.small : userPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            { u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id);
                                Axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "ab6db562-dd19-4343-8a6e-a77ed9ef5a07"
                                    }
                                }).then(response => {
                                    if (response.data.resultCode == 0){
                                        props.unfollow(u.id);
                                    }
                                    props.toggleFollowingProgress(false, u.id);
                                });
                            }}>Unfollow</button> 
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id);
                                Axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "ab6db562-dd19-4343-8a6e-a77ed9ef5a07"
                                    }
                                }).then(response => {
                                    if (response.data.resultCode == 0){
                                        props.follow(u.id);
                                    }
                                    props.toggleFollowingProgress(false, u.id);
                                });
                            }}>Follow</button> }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
                }
            </div>
}

export default Users