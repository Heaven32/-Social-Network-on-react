
import { addTextActionCreator, updateNewTextActionCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

// const DialogsContainer = () => {
    
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();

//                 let clickButton = () => {
//                     store.dispatch(addTextActionCreator());
//                 }

//                 let onTextChange = (text) => {
//                     let action = updateNewTextActionCreator(text);
//                     store.dispatch(action);
//                 }

//                 return <Dialogs updateNewText={onTextChange}
//                         addText={clickButton}
//                         messages={state.dialogsPage.messages}
//                         dialogs={state.dialogsPage.dialogs}
//                         newMessageText={state.dialogsPage.newMessageText}/>}
//         } 
//         </StoreContext.Consumer>
    
//     )
// }

let mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs,
        newMessageText:state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewText: (text) => {
            dispatch(updateNewTextActionCreator(text))
        },
        addText: () => {
            dispatch(addTextActionCreator())
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;