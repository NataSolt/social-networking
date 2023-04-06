import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/DIalogs/Dialogs';
import Header from './components/Header/Header';
import Muisic from './components/Muisic/Muisic';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Settings from './components/Settings/Settings';


function App(props) {
debugger
  return (
  
  <div className='app-wrapper'>
      <Header/>
      <Navbar friendsData={props.state.navbarPage.friendsData}/>
      <Routes>
     <Route path='/Profile' element={<Profile postData={props.state.profilePage.postData} addPost={props.addPost}
      newPostText ={props.state.profilePage.newPostText} updateNewPostText={props.updateNewPostText}/>} />
     <Route path='/Dialogs/*' element={<Dialogs dialogsData={props.state.dialogsPage.dialogsData} newMessageText={props.state.dialogsPage.newMessageText}
      messagesData={props.state.dialogsPage.messagesData} addMessage={props.addMessage} updateNewMessageText={props.updateNewMessageText}/>} />
     <Route path='/News' element={<News/>} />
     <Route path='/Muisic' element={<Muisic />} />
     <Route path='/Settings' element={<Settings />} />
      
      </Routes>
</div>

  );
}

export default App;
