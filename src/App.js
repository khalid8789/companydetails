
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Anchor from './components/Anchor/AnchorHeader'
import StartUp from './components/Start/StartUp';
import PieHolder from './components/Pie/PieHolder'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Anchor/>
     <StartUp/>
     <PieHolder/>
    </div>
  );
}

export default App;
