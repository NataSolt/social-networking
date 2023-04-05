import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/DIalogs/Dialogs';
import Header from './components/Header/Header';
import Muisic from './components/Muisic/Muisic';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Settings from './components/Settings/Settings';


function App({appState, addPost}) {

  return (
  
  <div className='app-wrapper'>
      <Header/>
      <Navbar friendsData={appState.navbarPage.friendsData}/>
      <Routes>
     <Route path='/Profile' element={<Profile postData={appState.profilePage.postData} addPost={addPost}/>} />
     <Route path='/Dialogs/*' element={<Dialogs dialogsData={appState.dialogsPage.dialogsData} messagesData={appState.dialogsPage.messagesData}/>} />
     <Route path='/News' element={<News/>} />
     <Route path='/Muisic' element={<Muisic />} />
     <Route path='/Settings' element={<Settings />} />
      
      </Routes>
</div>

  );
}

export default App;
