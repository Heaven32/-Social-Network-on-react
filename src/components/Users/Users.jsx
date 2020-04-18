import React from 'react';
import classes from './Users.module.css';

let Users = (props) => {

    if (props.users.length === 0){
        props.setUsers([
            {
                id: 1,
                photoUrl:'https://vjoy.cc/wp-content/uploads/2019/12/ava-dlya-patsanov-v-stim-samye-krutye-022.jpg',
                followed: true,
                fullName: "Leo", 
                status:"I am a boss", 
                location: {city: 'Dynam', country:'USA'}
            },
            {
                id: 2, 
                photoUrl:'https://vjoy.cc/wp-content/uploads/2019/12/ava-dlya-patsanov-v-stim-samye-krutye-022.jpg', 
                followed: false, 
                fullName: "Sara", 
                status:"I am a good people", 
                location: {city: 'Moscow', country:'Russia'}
            },
            {
                id: 3, 
                photoUrl:'https://vjoy.cc/wp-content/uploads/2019/12/ava-dlya-patsanov-v-stim-samye-krutye-022.jpg', 
                followed: true, 
                fullName: "Sam", 
                status:"I am a student", 
                location: {city: 'Roma', country:'Italy'}
            },
            {
                id: 4, 
                photoUrl:'https://vjoy.cc/wp-content/uploads/2019/12/ava-dlya-patsanov-v-stim-samye-krutye-022.jpg', 
                followed: false, 
                fullName: "Joshy", 
                status:"I am cook", 
                location: {city: 'Dnepr', country:'Ukraine'}
            }
        ]
        );
    }
    

    return  <div>
        {
            props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img className={classes.img_ava} src={u.photoUrl} />
                    </div>
                    <div>
                        { u.followed
                         ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> 
                         : <button onClick={() => {props.follow(u.id)}}>Follow</button> }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
        </div>
}

export default Users