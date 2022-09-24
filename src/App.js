import logo from './logo.svg';
import './App.css';
import Device from './components/Device';
import Watch from './components/Watch/Watch';
import Display from './components/Display/Display';
import Tablet from './components/Tablet/Tablet';

function App() {
  return (
    <div style={{border:'2px solid coral',margin:'5px'}} className="App">
      <Device name="iphone"></Device>
      <Watch></Watch>
      <Tablet></Tablet>
    </div>
  );
}

export default App;
