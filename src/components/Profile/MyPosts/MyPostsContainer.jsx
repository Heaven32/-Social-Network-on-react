import { addPostActionCreator, updateNewPostActionCreator } from '../../../Redux/profile-reducer';
import { connect } from 'react-redux';
import MyPosts from './MyPosts';
// import StoreContext from '../../../StoreContext';


// const MyPostsContainer = () => {

//   return (
//     <StoreContext.Consumer>
//        {(store) => {
//           let state = store.getState();

//           let addPost = () => {
//             store.dispatch(addPostActionCreator());
//           }
        
//           let onPostChange = (text) => {
//             let action = updateNewPostActionCreator(text);
//             store.dispatch(action);
//           }
//           return <MyPosts updateNewPostText={onPostChange}
//                           addPost={addPost}
//                           posts={state.profilePage.posts}
//                           newPostText={state.profilePage.newPostText}/>}
//       }
//     </StoreContext.Consumer>
//   )
// }

let mapStateToProps = (state) => {
  return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
          dispatch(updateNewPostActionCreator(text))
      },
      addPost: () => {
        dispatch(addPostActionCreator())
      },
  }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default ProfileContainer;