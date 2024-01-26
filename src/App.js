import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App() {
  return (<>
    <Navbar title="Jay's Portfolio" about="About"/>
    <Textform LikhoKuch="How many times you clicked:"/>
    </>
  );
}

export default App;
