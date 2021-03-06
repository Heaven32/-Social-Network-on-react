import { usersAPI } from "../API/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: "Hello people!", likesCount:"23"},
        {id: 2, message: "How are you bro?", likesCount:"244"},
        {id: 3, message: "I am fine? thanks", likesCount:"11"},
        {id: 4, message: "Maybe you want ice", likesCount:"223"},
        {id: 5, message: "No, it`s realy cold oll", likesCount:"323"},
        {id: 6, message: "Ha-ha", likesCount:"3"}
    ],
    newPostText: "",
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST: {
            let newPost = {
                id: 7,
                message: state.newPostText,
                likesCount: "3"
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }    
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    })
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile}) 
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT , newText: text});

export default profileReducer;