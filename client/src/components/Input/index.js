import React from "react";
import "./style.css";

function Input(props) {
    return (
        <div className="input-group input-group-lg" id="inputDiv">
            <input className="form-control" id="searchInput" type="text" {...props} />
        </div>
    );
};

export default Input;