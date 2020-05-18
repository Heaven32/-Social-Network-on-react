import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { Redirect } from 'react-router-dom';


const Dialogs = (props) => {

    let messageElements = props.messages.map( msg => <Message message={msg.message} key={msg.id} id={msg.id} />);
    let dialogsElements = props.dialogs.map( dlg => <DialogItem name={dlg.name} key={dlg.id} id={dlg.id} />);

    let newDialogsPosts = React.createRef();

    let clickButton = () => {
        props.addText();
    }

    let onTextChange = () => {
        let text = newDialogsPosts.current.value;
        props.updateNewText(text);
    }

    if(!props.isAuth){
        return <Redirect to={"/Login"} />
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
                    <textarea ref={newDialogsPosts} onChange={onTextChange} value={props.newMessageText} />
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