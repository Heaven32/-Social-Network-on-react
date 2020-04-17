const ADD_TEXT = 'ADD-TEXT';
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TEXT: {
            let newText = {
                id: 7,
                message: state.newMessageText
            };
            return {
                ...state,
                messages: [...state.messages, newText],
                newMessageText: ''
            };
        }
        case UPDATE_NEW_TEXT: {
            return {
                ...state,
                newMessageText: action.Text
            };
        }
        default:
                return state;
    }
}

export const addTextActionCreator = () => ({type: ADD_TEXT});
  
export const updateNewTextActionCreator = (text) => ({type: UPDATE_NEW_TEXT, Text: text });

export default dialogsReducer;