import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
      <div className={classes.item}>
        <img src="https://pubg.best/data/avatars/l/0/721.jpg?1531143739"></img>
          { props.message }
        <div>
          <span>like</span>{ props.likesCount }
        </div>
      </div>
    )
}
export default Post