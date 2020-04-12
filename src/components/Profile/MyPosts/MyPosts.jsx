import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.posts.map( pst => <Post message={pst.message} likesCount={pst.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({type: 'ADD-POST'});
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;

    let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
    props.dispatch(action);
  }

    return (
      <div className={classes.my_posts}>
        <h2>My posts</h2>
        <div>
          <div className={classes.text_form}>
            <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
          </div>
          <div className={classes.btn}>
            <button onClick={addPost}>Add posts</button>
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