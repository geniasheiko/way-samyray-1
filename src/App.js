import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileInfo/ProfileContainer';
import New from './components/New/New';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import LoginPage from './components/Login/Login';


const App = (props) => {

  return (
    <BrowserRouter>

      <div className='app-wrapper'>

        <Header />
        <Navbar />

        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/New' element={<New />} />
            <Route path='/Music' element={<Music />} />
            <Route path='/Settings' element={<Settings />} />
            <Route path='/dialogs' element={<DialogsContainer />} />
            <Route path='/profile/:userId?' element={<ProfileContainer />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/login' element={<LoginPage />} />
          </Routes>
        </div>
      </div>

    </BrowserRouter>
  )
}

export default App;
