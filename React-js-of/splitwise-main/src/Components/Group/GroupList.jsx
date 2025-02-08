import React from "react";
import "../../sass/styles.scss";
import { Link, useHistory } from "react-router-dom";

const GroupList = ({ arrayOfGroups, onHandleClickedGroup }) => {
  const history = useHistory();

  const handleClickedGroup = (e, indx, group) => {
    e.preventDefault();
    onHandleClickedGroup(group, indx);
    history.push(`dashboard/${indx}`);
  };

  return (
    <ul className="listOfGroups">
      {arrayOfGroups.map((group, indx) => (
        <li
          key={group.nameOfGroup}
          onClick={(e) => handleClickedGroup(e, indx, group)}
        >
          <span className="linkStyle">{group.nameOfGroup}</span>
        </li>
      ))}
      <Link className="addGroupBtn" to="/add">
        Add Your Group
      </Link>
    </ul>
  );
};

export default GroupList;
