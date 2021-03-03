import React from "react";
import './Buttons.css';

function Buttons(props) {
    return (
        <div className="btns-panel">
            <button className="btn" onClick={() => { props.buttonMethod('add') }}>Add {props.stepValue}</button>
            <button className="btn" onClick={() => { props.buttonMethod('reinit') }}>ReInit</button>
            <button className="btn" onClick={() => { props.buttonMethod('reset') }}>Reset</button>
        </div>
    );
};

export default Buttons;