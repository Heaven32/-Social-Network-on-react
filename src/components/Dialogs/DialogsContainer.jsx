import React from 'react';
import { addTextActionCreator, updateNewTextActionCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {
    
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                let clickButton = () => {
                    store.dispatch(addTextActionCreator());
                }

                let onTextChange = (text) => {
                    let action = updateNewTextActionCreator(text);
                    store.dispatch(action);
                }

                return <Dialogs updateNewText={onTextChange}
                        addText={clickButton}
                        messages={state.dialogsPage.messages}
                        dialogs={state.dialogsPage.dialogs}
                        newMessageText={state.dialogsPage.newMessageText}/>}
        } 
        </StoreContext.Consumer>
    
    )
}
export default DialogsContainer;