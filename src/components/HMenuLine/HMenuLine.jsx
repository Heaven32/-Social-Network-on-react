import React from 'react';
import classes from './HMenuLine.module.css';
import { NavLink } from 'react-router-dom';

const HMenuLine = (props) => {
    return (
        <div className={classes.wrap}>
            <div className={classes.item}>
                <NavLink to="/about" activeClassName={classes.activeLink} >About</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/home" activeClassName={classes.activeLink} >Home</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/exit" activeClassName={classes.activeLink} >Exit</NavLink> 
            </div>
        </div>
    )
}
export default HMenuLine