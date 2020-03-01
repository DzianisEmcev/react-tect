import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {ButtonComponent} from "./Components/btnComponent";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <nav className="navbar navbar-light bg-light justify-content-between">
                        <form className="form-inline">
                            <ButtonComponent style="btn btn-primary btn-sm" name="Log In"/>
                            <ButtonComponent style="btn btn-secondary btn-sm" name="Sign Up"/>
                        </form>
                    </nav>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/log_in">Log In</Link>
                                <ButtonComponent style="btn btn-primary btn-sm" name="Log In"/>
                            </li>
                            <li>
                                <Link to="/sign_up">Sign Up</Link>
                                <ButtonComponent style="btn btn-secondary btn-sm" name="Sign Up"/>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/log_in">
                            <Log_In/>
                        </Route>
                        <Route path="/sign_up">
                            <Sign_Up/>
                        </Route>
                    </Switch>
                </div>
            </Router>
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

function Log_In() {
    return<div><h2>Log In</h2>
        <form>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Name"/>
            </div>
            <div className="form-group">
                <label>label>Password</label>
                <input type="password" className="form-control" placeholder="Password"/>
            </div>
        </form>
    </div>;
}

function Sign_Up() {
    return <div><h2>Sign Up</h2>
        <form>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Name"/>
            </div>
            <div className="form-group">
                <label>label>Password</label>
                <input type="password" className="form-control" placeholder="Password"/>
            </div>
            <div className="form-group">
                <label>label>Repeat password</label>
                <input type="password" className="form-control" placeholder="Repeat password"/>
            </div>
        </form>
    </div>;
}

export default App;
