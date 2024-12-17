import './App.css';
import Secundomer from './components/Stopwatch';
import Timer from './components/Timer';
import Watch from './components/Clock';

function App() {
  return (
    <div className="app">
      <Watch/>
      <Timer/>
      <Secundomer/>
    </div>
  );
}

export default App;