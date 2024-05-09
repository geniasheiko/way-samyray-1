import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import New from './components/New/New';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { addPost } from './redux/state';

const App = (props) => {
 

  return (
    <BrowserRouter>
     <div className='app-wrapper'>
      <Header />
      <Navbar>
      <Routes>
  <Route path='/New' element={<New/>}/>
  <Route path='/Music' element={<Music/>}/>
  <Route path='/Settings' element={<Settings/>}/>
 </Routes>
 </Navbar>
      <div className='app-wrapper-content'>
       <Routes>
       <Route path='/dialogs' element={<Dialogs store={props.store} />} />
       <Route path='/profile' element={<Profile profilePage={props.state.profilePage} 
       dispatch={props.dispatch}/> } />
      </Routes>
 
       </div>
      </div>
     </BrowserRouter> 
  )
}



export default App;
