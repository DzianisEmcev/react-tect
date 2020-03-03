import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return (
        <div className="App">
            <body>
            <div className="flex-container-main">
                <div className="flex-container-header">
                    <div>
                        <img src={logo} className="App-logo" alt="logo"/>
                    </div>
                </div>
                <div className="flex-container-body">
                    <div>
                        <h3>New request</h3>
                    </div>
                    <div>
                        <h5>Type</h5>
                    </div>
                    <div>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>Vocation</option>
                            <option>sick</option>
                            <option>military</option>
                        </select>
                    </div>
                </div>
                <div className="flex-container-footer">
                    <div className="flex-container-footer-calendar">
                        <div>
                            <label>Start Date(inclusive)</label>
                            <input type="date" name="bday" max="3000-12-31"
                                   min="1000-01-01" className="form-control"/>
                        </div>
                        <div>
                            <label>End Date(inclusive)</label>
                            <input type="date" name="bday" min="1000-01-01"
                                   max="3000-12-31" className="form-control"/>
                        </div>
                        <div>
                            <label>Day(s)</label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <div>
                        <h5>Comments</h5>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="button" className="btn btn-primary">SUBMIT</button>
                </div>
            </div>
            </body>
        </div>
    );
}

export default App;
