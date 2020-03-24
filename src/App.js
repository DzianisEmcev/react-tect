import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Comments} from "./Components/Comments";
import {Calendar} from "./Components/Calendar";
import {Day} from "./Components/Day(s)";
import {Type} from "./Components/Type";

class App extends React.Component {
    constructor(props) {
        super(props);

        const currentDate = new Date();
        const requiredDateFormat = currentDate.getFullYear() + "-" + ("0" + (currentDate.getMonth() + 1)).slice(-2) + "-" + currentDate.getDate();
        const typeArray = [<option>Vocation</option>, <option>Sick leave</option>, <option>Own expense leave</option>, <option>Military leave</option>];

        this.state = {
            leave: typeArray,
            calendar: {
                startDate: requiredDateFormat,
                endDate: requiredDateFormat
            },
            comment: "",
            resultDay: "0",
        };
    }

    clickSubmit() {
        alert(this.state.leave);
        alert(this.state.comment);
        alert("Start Date:" + " " + this.state.calendar.startDate);
        alert("End Date:" + " " + this.state.calendar.endDate);
    }

    typeVacationMethod(typeVacation) {
        debugger;
        this.setState({leave: typeVacation})
    }

    commentMethod(commentValue) {
        this.setState({comment: commentValue});
    }

    calculateDateDays (calendarStartDate, calendarEndDate)  {
         const startDate = new Date(calendarStartDate);
         const endDate = new Date(calendarEndDate);
         const result = Math.ceil(Math.abs(endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));
         this.setState({resultDay: result});
    }

    setStartDate(calendarValue) {
        this.setState({
            calendar: {
                startDate: calendarValue,
                endDate: this.state.calendar.endDate
            }
        });
        this.calculateDateDays(calendarValue, this.state.calendar.endDate);
    }

    setEndDate(calendarValue) {
        this.setState({
            calendar: {
                startDate: this.state.calendar.startDate,
                endDate: calendarValue
            }
        });
        this.calculateDateDays(this.state.calendar.startDate, calendarValue);
    }

    render() {

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
                        <Type typeName="Type" typeArr={this.state.leave} vacationMethod={this.typeVacationMethod.bind(this)}>

                        </Type>
                    </div>
                    <div className="flex-container-footer">
                        <div className="flex-container-footer-calendar">
                            <div>
                                <Calendar changeDate={this.setStartDate.bind(this)}
                                          denisZapomniRazINavsegdaChtoEtoImyaCherezKotoroeNuzhnoStuchatsia={this.state.calendar.startDate} calendarName="Start">

                                </Calendar>
                            </div>
                            <div>
                                <Calendar changeDate={this.setEndDate.bind(this)}
                                          denisZapomniRazINavsegdaChtoEtoImyaCherezKotoroeNuzhnoStuchatsia={this.state.calendar.startDate} calendarName="End">

                                </Calendar>
                            </div>
                            <Day result={this.state.resultDay}>

                            </Day>
                        </div>
                        <Comments commentMethod={this.commentMethod.bind(this)}>

                        </Comments>
                    </div>
                    <div className="foot-button-faq">
                        <button type="button" className="btn btn-primary" onClick={this.clickSubmit.bind(this)}>SUBMIT
                        </button>
                        <div>Have questions?</div>
                        <a>Read FAQ</a>
                    </div>
                </div>
                </body>
            </div>
        );
    }
}

export default App;
