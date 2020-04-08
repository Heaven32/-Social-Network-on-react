import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.posts.map( pst => <Post message={pst.message} likesCount={pst.likesCount} />);

    return (
      <div className={classes.my_posts}>
        <h2>My posts</h2>
        <div>
          <div className={classes.text_form}>
            <textarea></textarea>
          </div>
          <div className={classes.btn}>
            <button>Add posts</button>
            <button>Remove</button>
          </div>
        </div>
        <div className={classes.posts}>
          { postsElements }
        </div>
      </div>
    )
}
export default MyPosts