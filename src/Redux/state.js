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
            newPostText: "hello"
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
            newMessageText: "Hi Bro!"
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
        if(action.type === 'ADD-TEXT') {
            let newText = {
                id: 7,
                message: this._state.dialogsPage.newMessageText
            };
            this._state.dialogsPage.messages.push(newText);
            this._state.dialogsPage.newMessageText = "";
            this._callSubscriber(this._state);
        }else if (action.type === 'UPDATE-NEW-TEXT'){
            this._state.dialogsPage.newMessageText = action.Text;
            this._callSubscriber(this._state);
        }else if (action.type === 'ADD-POST'){
            let newPost = {
                id: 7,
                message: this._state.profilePage.newPostText,
                likesCount: "3"
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        }else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};

export default store;
