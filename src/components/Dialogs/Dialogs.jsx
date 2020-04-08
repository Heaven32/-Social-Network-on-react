import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {

   let messageElements = props.state.messages.map( msg => <Message message={msg.message} id={msg.id} />);
   let dialogsElements = props.state.dialogs.map( dlg => <DialogItem name={dlg.name} id={dlg.id} />);

   return (
     <div className={classes.dialogs}>
         <div className={classes.dialogsItem}>
           { dialogsElements }
        </div>
        <div className={classes.massages}>
            { messageElements }
        </div>
    </div>
    )
}
export default Dialogs