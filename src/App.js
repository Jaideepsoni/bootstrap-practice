import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App() {

  const [mode, setMode] = useState('light')
  const toggleMode =()=> {
        if(mode === 'light'){
          setMode('dark')
          document.body.style.background = '#183D3D'
          document.body.style.color= 'white'
        }
        else{
          setMode('light')
          document.body.style.background = 'white'
          document.body.style.color= 'black'
        }
  }
  return (<>
    <Navbar title="Jay's Portfolio" about="About" mode={mode} toggleMode={toggleMode} />
    <Textform LikhoKuch="Enter you text here:" mode={mode}  />
    </>
  );
}

export default App;
