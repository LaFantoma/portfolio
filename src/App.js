import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import Homepage from './components/homepage/Homepage';
import About from './components/aboutme/About';
import Contacts from './components/contacts/Contacts';
import Skills from './components/skills/Skills';
import Git from './components/git/Git';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/git' element={<Git />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
