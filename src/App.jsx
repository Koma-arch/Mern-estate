import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import SignIN from './pages/SignIN';
import SignUp from './pages/Signup';
import About from './pages/About';
import Profile from './pages/Profile';

export default function App(){
  return <BrowserRouter>
  <Routes>
    <Route path = "/" element={<Home/>} />
    <Route path = "/sign-in" element={<SignIN/>} />
    <Route path = "/sign-up" element={<SignUp/>} />
    <Route path = "/about" element={<About/>} />
    <Route path = "/profile" element={<Profile/>} />

  </Routes>
  </BrowserRouter>;
}
