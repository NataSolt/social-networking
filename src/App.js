import { Route, Routes } from 'react-router-dom';
import './App.css';
import Muisic from './components/Muisic/Muisic';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/DIalogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';



function App(props) {

  return (
 
  <div className='app-wrapper'>
      <HeaderContainer/>
      <Navbar />
      <Routes>
     {/* <Route path='/Profile/*' element={<ProfileContainer />} /> */}
     <Route path="/profile/:userId?" element={<ProfileContainer/>}/>
     <Route path='/dialogs/*' element={<DialogsContainer />} />
     <Route path='/users' element={<UsersContainer />} />

     <Route path='/news' element={<News/>} />
     <Route path='/muisic' element={<Muisic />} />
     <Route path='/settings' element={<Settings />} />
     <Route path='/login' element={<Login />} />
      
      </Routes>
</div>

  );
}

export default App;
