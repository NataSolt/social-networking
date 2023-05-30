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



function App(props) {

  return (
 
  <div className='app-wrapper'>
      <HeaderContainer/>
      <Navbar />
      <Routes>
     {/* <Route path='/Profile/*' element={<ProfileContainer />} /> */}
     <Route path="/profile/:userId?" element={<ProfileContainer/>}/>
     <Route path='/Dialogs/*' element={<DialogsContainer />} />
     <Route path='/Users' element={<UsersContainer />} />

     <Route path='/News' element={<News/>} />
     <Route path='/Muisic' element={<Muisic />} />
     <Route path='/Settings' element={<Settings />} />
      
      </Routes>
</div>

  );
}

export default App;
