import './index.css';
import * as serviceWorker from './serviceWorker';
import state, { subscribe } from './Redux/state';
import sate from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, updateNewPostText, updateNewText, addText} from './Redux/state';
import { BrowserRouter } from 'react-router-dom';

let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addText={addText} updateNewText={updateNewText} />
        </BrowserRouter>, document.getElementById('root'));
    
}
renderEntireTree(state);
subscribe(renderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
