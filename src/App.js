import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={`${process.env.PUBLIC_URL}/logo.png`}  />
        <h2>
          Welcome
        </h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Starting to learn React
        </a>
      </header>
    </div>
  );
}

export default App;
