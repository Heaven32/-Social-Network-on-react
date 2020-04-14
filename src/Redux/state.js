import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state : { 
        profilePage:{ 
            posts: [
                {id: 1, message: "Hello people!", likesCount:"23"},
                {id: 2, message: "How are you bro?", likesCount:"244"},
                {id: 3, message: "I am fine? thanks", likesCount:"11"},
                {id: 4, message: "Maybe you want ice", likesCount:"223"},
                {id: 5, message: "No, it`s realy cold oll", likesCount:"323"},
                {id: 6, message: "Ha-ha", likesCount:"3"}
            ],
            newPostText: ""
        },
        dialogsPage:{
            dialogs: [
                {id: 1, name: "Jonny"},
                {id: 2, name: "Tom"},
                {id: 3, name: "Dina"},
                {id: 4, name: "Mayke"},
                {id: 5, name: "Jessy"},
                {id: 6, name: "Lina"}
            ],
            messages: [
                {id: 1, message: "Hello people!"},
                {id: 2, message: "How are you bro?"},
                {id: 3, message: "I am fine? thanks"},
                {id: 4, message: "Maybe you want ice"},
                {id: 5, message: "No, it`s realy cold oll"},
                {id: 6, message: "Ha-ha"}
            ],
            newMessageText: ""
        },
        sidebar:{
            blockFriends:[
                {id: 1, name: "Jonny"},
                {id: 2, name: "Tom"},
                {id: 3, name: "Dina"}
            ]  
        }
    },
    _callSubscriber() {
    
    },

    getState() {
        return this._state; 
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state)
    }
};

export default store;
