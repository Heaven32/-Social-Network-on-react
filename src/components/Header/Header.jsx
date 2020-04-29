import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <div>
            <header className={classes.header}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRI2cQGvoPxZrUcKM-KDYUUGNbNzvj7uNnNmmbNnzmcDSmgvTpV'></img>
                <div className={classes.login_block}>
                    {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </header>
        </div>
    )
}
export default Header