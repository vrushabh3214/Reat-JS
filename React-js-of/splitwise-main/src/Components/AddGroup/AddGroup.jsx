import React, { useState } from "react";
import "../../sass/styles.scss";
import { Link } from "react-router-dom";
import AddGroupCounter from "./AddGroupCounter";

const AddGroup = (props) => {
  const [names, setNames] = useState([""]);
  const [nameOfGroup, setNameOfGroup] = useState("");

  const updateGroupName = (e) => {
    setNameOfGroup(e.target.value);
  };

  const updateGroupInfo = (e) => {
    e.stopPropagation();
    if (nameOfGroup && names.length) {
      props.onUpdateGroupInfo(nameOfGroup, names);
    } else {
      alert("Please enter both the group name and members' names");
    }
  };

  const updateMembersNames = (names) => {
    setNames(names);
  };

  return (
    <div className="addGroup">
      <div className="menu">
        <h1>Add Group</h1>
        <Link className="exitBtn" to="/">
          Home
        </Link>
        <Link className="addGroupBtn" to="/setting">
          Settings
        </Link>
        <Link className="exitBtn" to="/dashboard">
          Back
        </Link>
      </div>
      <div className="addGroupBox">
        <form>
          <input
            id="nameOfGroup"
            className="form-control"
            type="text"
            placeholder="Name of the group"
            value={nameOfGroup}
            onChange={updateGroupName}
          />
          <AddGroupCounter updateMembersNames={updateMembersNames} />
          <Link
            className="addGroupBtn"
            to="/dashboard"
            onClick={updateGroupInfo}
          >
            Update Your Group
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AddGroup;
