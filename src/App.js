import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import New from './components/New/New';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {
 
  return (
    <BrowserRouter>
   
     <div className='app-wrapper'>
      <Header />
      <Navbar/>
   
     
      <div className='app-wrapper-content'>
        <Routes>
        <Route path='/New' element={<New/>}/>
          <Route path='/Music' element={<Music/>}/>
          <Route path='/Settings' element={<Settings/>}/> 
          <Route path='/dialogs' element={<DialogsContainer />} />
          <Route path='/profile' element={<Profile /> }/> 
          <Route path='/users' element={<UsersContainer /> } />       
        </Routes> 
      </div>
    </div>
     
     </BrowserRouter> 
  )
}



export default App;
