import './App.css';
import Menubar from './component/MenuBar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './component/Home';
import Projects from './component/Projects';
import Resume from './component/Resume';
import Thingsilove from './component/Thingsilove';
import Contact from './component/Contact';
import { useState } from 'react';
import Skills from './component/Skills';


function App() {
  const [page, setPage] = useState("home");
  const [darkmode, setDarkmode] = useState(true)
  if(darkmode===true)
  {
    document.body.classList.add('bodycolordark')
    document.body.classList.remove('bodycolorlight')
  }
  else
  {
    document.body.classList.remove('bodycolordark')
    document.body.classList.add('bodycolorlight')
  }
  var appcolor = darkmode?'appcolor-dark':'appcolor-light'
  return (
    <div className={appcolor + " App"}>
      <BrowserRouter>
      <Menubar page={page} 
      darkmode={darkmode}
      setdarkmode={setDarkmode}
      />
      <Routes>
        <Route exact path="/" element={<Home 
        setPage={setPage}
        darkmode={darkmode}
        />}/>
        <Route exact path="/Projects" element={<Projects 
        setPage={setPage} 
        darkmode={darkmode}
        />}/>
        <Route exact path="/Skills" element={<Skills 
        setPage={setPage}
        darkmode={darkmode} />}/>
        <Route exact path="/Resume" element={<Resume setPage={setPage}/>}/>
        <Route exact path="/Thingsilove" element={<Thingsilove setPage={setPage} 
        darkmode={darkmode}/>}/>
        <Route exact path="/Contact" element={<Contact setPage={setPage}
        darkmode={darkmode}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
