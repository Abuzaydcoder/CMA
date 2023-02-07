// import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup/Signup';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Partials/Header';
import NotFound from './Components/Auth/NotFound';
import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';
import Settings from './Components/Profile/Settings';
import AddContact from './Components/Contact/AddContact';
import EditProfile from './Components/Profile/EditProfile';
import ChangePassword from './Components/Profile/ChangePassword';
import DeleteProfile from './Components/Profile/DeleteProfile';
import AccountCreated from './Components/Others/AccountCreated';

// import { FaHome } from 'react-icons/fa';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route index element= {<Home/>}/>
          <Route path='/Signup' element={<Signup />} />
          <Route path='/AccountCreated' element={<AccountCreated />} />

          <Route path='/Login' element={<Login />} />

          <Route path='/Profile/:id' element={<Profile />} />
          <Route path='/Profile/settings' element={<Settings />} />
          <Route path='/Profile/edit' element={<EditProfile />} />
          <Route path='/Profile/change-password' element={<ChangePassword />} />
          <Route path='/Profile/delete-account' element={<DeleteProfile />} />
          
          <Route path='/add-contact' element={<AddContact />} />

          <Route path='*' element= {<NotFound/>}/>
        </Routes>
        
      </div>
    </BrowserRouter >
    
  );
}

export default App;
