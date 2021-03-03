import React, { Component } from 'react';
import './Step.css';

class Step extends Component {
    render() {
        return (
            <div className="step-input">
                <label>Step:<input ref={(data) => { this.inputStep = data }} onChange={() => { this.props.updateStep(this.inputStep.value) }} type="number" defaultValue="1" /></label>
            </div>
        );
    };
};

export default Step;