import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = { date: new Date() };
    };

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setTimer()
        }, 1000);
    };

    componentWillUnmount() {
        clearInterval(this.timerId);
    };

    setTimer = () => {
        this.setState({
            date: new Date()
        });
    };

    render() {
        return (
            <div className="clock">
                <h4>Time: {this.state.date.toLocaleTimeString()}<span onClick={this.props.toggleClockMethod}>X</span></h4>
            </div>
        );
    };
};

export default Clock;