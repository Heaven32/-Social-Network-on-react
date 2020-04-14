import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { addTextActionCreator, updateNewTextActionCreator } from '../../Redux/state';

const Dialogs = (props) => {

    let messageElements = props.state.messages.map( msg => <Message message={msg.message} id={msg.id} />);
    let dialogsElements = props.state.dialogs.map( dlg => <DialogItem name={dlg.name} id={dlg.id} />);

    let newDialogsPosts = React.createRef();

    let clickButton = () => {
        props.dispatch(addTextActionCreator());
    }

    let onTextChange = () => {
        let text = newDialogsPosts.current.value;

        let action = updateNewTextActionCreator(text);
        props.dispatch(action);
    }

   return (
     <div className={classes.dialogs}>
         <div className={classes.dialogsItem}>
           { dialogsElements }
        </div>
        <div className={classes.massages}>
            <div>{ messageElements }</div>
            <div>
                <div>
                    <textarea ref={newDialogsPosts} onChange={onTextChange} value={props.state.newMessageText} />
                </div>
                <div>
                    <button onClick={clickButton}>ok</button>
                </div>
            </div>
            
        </div>
    </div>
    )
}
export default Dialogs