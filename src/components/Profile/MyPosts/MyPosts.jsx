import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  // let state = props.profilePage;

  let postsElements = props.posts.map( pst => <Post message={pst.message} likesCount={pst.likesCount} id={pst.id}/>);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

    return (
      <div className={classes.my_posts}>
        <h2>My posts</h2>
        <div>
          <div className={classes.text_form}>
            <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
          </div>
          <div className={classes.btn}>
            <button onClick={onAddPost}>Add posts</button>
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