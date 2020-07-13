import React from 'react';
// import logo from './logo.svg';
import Route from '@/routes/index'
import './App.css';
import '@/assets/style/index.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Route></Route>
      </header>
    </div>
  );
}

export default App;