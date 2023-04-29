import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {DataProvider} from './Context/DataProvider';

function App() {
  return (
    <div className="App">
      <DataProvider>
      <Home></Home>
      </DataProvider>
  
    </div>
  );
}

export default App;
