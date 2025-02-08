import React from "react";
import "../../sass/styles.scss";
import { Link } from "react-router-dom";
import PeopleList from "./PeopleList/PeopleList.jsx";
import OwesBox from "./OwesBox/OwesBox.jsx";
import BillList from "./Bill/BillList.jsx";

const Group = ({ clickedGroup }) => {
  return (
    <div>
      <div className="menu">
        <h1>{clickedGroup.nameOfGroup}</h1>
        <Link className="exitBtn" to="/">
          Home
        </Link>
        <Link className="exitBtn" to="/dashboard">
          Back
        </Link>
      </div>
      <div className="groupDashboard">
        <PeopleList clickedGroup={clickedGroup} />
        <OwesBox clickedGroup={clickedGroup} />
        <BillList clickedGroupBills={clickedGroup.bills} />
      </div>
    </div>
  );
};

export default Group;
