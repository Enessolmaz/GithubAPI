
import './App.css';
import ContextCreater from './components/Context';
import Home from './components/Home';

function App() {
  return (
    <ContextCreater>
      <Home/>
    </ContextCreater>
  );
}

export default App;
