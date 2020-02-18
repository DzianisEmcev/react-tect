import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return (
        <div className="App">
            <nav className="navbar navbar-light bg-light justify-content-between">
                <form className="form-inline">
                    <button type="button" className="btn btn-primary btn-sm">Log In</button>
                    <a href="/xxx"><button type="button" className="btn btn-secondary btn-sm">Sign Up</button></a>
                </form>
            </nav>
            <form>
                <div className="form-group">
                    <input type="text" placeholder="username"/>
                </div>
                <div className="form-group">
                    <input type="password" placeholder="password"/>
                </div>
                <div className="form-group">
                    <input type="password" placeholder="repeat-password"/>
                </div>
                <button type="button" className="btn btn-dark btn-sm">Sign Up</button>
            </form>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
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
                </a>
            </header>
        </div>
    );
}

export default App;
