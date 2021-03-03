import React, { Component } from "react";
import './Counter.css';
import Buttons from './Buttons';
import Step from './Step';
import Clock from './Clock';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue,
            showClock: true,
            stepValue: 1
        };
    };

    changeValue = (action) => {
        this.setState((prevState, prevProps) => {
            let currentCounterValue = prevState.counterValue;

            if (action === 'add') {
                currentCounterValue += this.state.stepValue;
            } else if (action === 'reinit') {
                currentCounterValue = prevProps.initValue;
            } else {
                currentCounterValue = 0;
            };

            return ({
                counterValue: currentCounterValue
            });
        });
    };

    toggleClock = () => {
        this.setState((prevState) => {
            return ({
                showClock: !prevState.showClock
            });
        });
    };

    updateStep = (currentStep) => {
        this.setState(() => {
            return ({
                stepValue: +currentStep
            });
        });
    };

    render() {
        let clockElement = '';

        if (this.state.showClock) {
            clockElement = <Clock toggleClockMethod={this.toggleClock} />
        } else {
            clockElement = <span className="show-clock" onClick={this.toggleClock}>Show Clock</span>
        };

        return (
            <div className="counter">
                Counter:<span className="value">{this.state.counterValue}</span>
                <Buttons buttonMethod={this.changeValue} stepValue={this.state.stepValue} />
                <Step updateStep={this.updateStep} />
                {clockElement}
            </div>
        );
    };
};

export default Counter;