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
       <Route path='/dialogs' element={<Dialogs state={props.state.dialogsPage}/>} />
       {/* <Route path='/dialogs' element={<Dialogs dialogs={props.state.dialogsPage.dialogs}messages={props.state.dialogsPage.messages}/>} /> */}
       <Route path='/profile' element={<Profile state={props.state.profilePage}/>} />
       {/* <Route path='/profile' element={<Profile posts={props.state.profilePage.posts}/>} /> */}
       </Routes>
 
       </div>
      </div>
     </BrowserRouter> 
  )
}



export default App;
