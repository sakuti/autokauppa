import './App.css';
import Divider from './components/Divider';
import Navbar from './components/Navbar';
import Recommend from './components/Recommend';
import Search from './components/Search';
import Vehicles from './components/Vehicles';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Recommend/>
      <Search/>
      <Vehicles/>
    </div>
  );
}

export default App;
