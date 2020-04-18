import React from 'react';
import classes from './Users.module.css';
import Axios from 'axios';
import userPhoto from '../../assets/images/images.png'

class Users extends React.Component {

    constructor(props){
        super(props);

        Axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return  <div>
        {
            this.props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img className={classes.img_ava} src={ u.photos.small != null ? u.photos.small : userPhoto} />
                    </div>
                    <div>
                        { u.followed
                         ? <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button> 
                         : <button onClick={() => {this.props.follow(u.id)}}>Follow</button> }
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
} 

export default Users