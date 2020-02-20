import React from "react";

export default props => (
    <div className="user-block">
        <p>Name: <span>{ props.name || "Undefined" }</span></p>
        <p>Surname: <span>{ props.surname || "Undefined" }</span></p>
        <p>Age: <span>{ props.age || "Undefined" }</span></p>
    </div>
)