const ADD_TEXT = 'ADD-TEXT';
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT';

const dialogsReducer = (state,action) => {
    switch(action.type){
        case ADD_TEXT:
            let newText = {
                id: 7,
                message: state.newMessageText
            };
            state.messages.push(newText);
            state.newMessageText = "";
            return state;
        case UPDATE_NEW_TEXT:
            state.newMessageText = action.Text;
            return state;
        default:
                return state;
    }
}

export const addTextActionCreator = () => ({type: ADD_TEXT});
  
export const updateNewTextActionCreator = (text) => ({type: UPDATE_NEW_TEXT, Text: text });

export default dialogsReducer;