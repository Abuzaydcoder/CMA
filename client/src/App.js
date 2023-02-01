// import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup/Signup';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Partials/Header';
import NotFound from './Components/Auth/NotFound';
import Login from './Components/Login/Login';
// import { FaHome } from 'react-icons/fa';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route index element= {<Home/>}/>
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Login' element={<Login />} />
          <Route path='*' element= {<NotFound/>}/>
        </Routes>
        
      </div>
    </BrowserRouter >
    
  );
}

export default App;
