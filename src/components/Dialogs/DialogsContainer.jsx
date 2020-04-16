import React from 'react';
import { addTextActionCreator, updateNewTextActionCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    
    let state = props.store.getState();

    let clickButton = () => {
        props.store.dispatch(addTextActionCreator());
    }

    let onTextChange = (text) => {
        let action = updateNewTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (<Dialogs updateNewText={onTextChange}
        addText={clickButton}
        messages={state.dialogsPage.messages}
        dialogs={state.dialogsPage.dialogs}
        newMessageText={state.dialogsPage.newMessageText}
    />)
}
export default DialogsContainer;