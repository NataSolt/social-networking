import { Route, Routes } from 'react-router-dom';
import './App.css';
//import Dialogs from './components/DIalogs/Dialogs';
import Header from './components/Header/Header';
import Muisic from './components/Muisic/Muisic';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/DIalogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';



function App(props) {

  return (
 
  <div className='app-wrapper'>
      <Header/>
      <Navbar />
      <Routes>
     <Route path='/Profile' element={<Profile />} />
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
