import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText, updateNewText, addText} from './Redux/state';
import { BrowserRouter } from 'react-router-dom';

export let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addText={addText} updateNewText={updateNewText} />
        </BrowserRouter>, document.getElementById('root'));
    
}

