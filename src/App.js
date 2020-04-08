import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import HMenuLine from './components/HMenuLine/HMenuLine';
import { Route, BrowserRouter } from 'react-router-dom';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Friends from './components/Friends/Friends';


const App = (props) => {
  return (
      <div className='app-wrapper'>
          <Header />
          <HMenuLine />
          <Navbar />
          <div className='app-wrapper-content'>
            <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} /> } />
            <Route path='/profile' render={() => <Profile state={props.state.profilePage} /> } />
            <Route path='/news' render={() => <News/> } />
            <Route path='/music' render={() => <Music/> } />
            <Route path='/settings' render={() => <Settings/> } />
            <Route path='/friends' render={() => <Friends /> } />
          </div>
      </div>
  )
}

export default App;
