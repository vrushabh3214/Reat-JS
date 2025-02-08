import React, { useState } from "react";
import "../../sass/styles.scss";

const AddGroupCounter = (props) => {
  const [counter, setCounter] = useState(1);
  const [names, setNames] = useState([""]);

  const handleSpan = (e) => {
    e.preventDefault();
    const action = e.currentTarget.innerText;
    if (action === "+" && counter < 10) {
      setCounter(counter + 1);
      setNames([...names, ""]);
    } else if (action === "-" && counter > 1) {
      setCounter(counter - 1);
      setNames(names.slice(0, -1));
    }
  };

  const updateMembersNames = (e, indx) => {
    const updatedNames = [...names];
    updatedNames[indx] = e.target.value;
    setNames(updatedNames);
    props.updateMembersNames(updatedNames);
  };

  return (
    <div>
      <div className="counter">
        <button className="btn btn-primary" onClick={handleSpan}>
          -
        </button>
        <span>{counter}</span>
        <button className="btn btn-primary" onClick={handleSpan}>
          +
        </button>
      </div>
      {Array.from({ length: counter }, (_, indx) => (
        <div key={indx} className="listOfMembers">
          <input
            id="names"
            type="text"
            placeholder="Enter Name"
            className="form-control"
            value={names[indx] || ""}
            onChange={(e) => updateMembersNames(e, indx)}
          />
        </div>
      ))}
    </div>
  );
};

export default AddGroupCounter;
