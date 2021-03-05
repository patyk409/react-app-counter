import React from "react";
import './Step.css';

const Step = props => {
    return (
        <div className="step-input">
            <label>Step:<input onChange={(event) => { props.updateStep(event.target.value) }} type="number" value={props.stepValue} /></label>
        </div>
    );
};

export default Step;