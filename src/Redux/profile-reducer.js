const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: "Hello people!", likesCount:"23"},
        {id: 2, message: "How are you bro?", likesCount:"244"},
        {id: 3, message: "I am fine? thanks", likesCount:"11"},
        {id: 4, message: "Maybe you want ice", likesCount:"223"},
        {id: 5, message: "No, it`s realy cold oll", likesCount:"323"},
        {id: 6, message: "Ha-ha", likesCount:"3"}
    ],
    newPostText: ""
};

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST: {
            let newPost = {
                id: 7,
                message: state.newPostText,
                likesCount: "3"
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }    
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};

            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
  
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT , newText: text});

export default profileReducer;