import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">React App - Counter</h1>
      </header>
      <Counter initValue={100} />
    </div>
  );
};

export default App;
