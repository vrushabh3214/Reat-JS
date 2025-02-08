import React, { useState, useEffect } from "react";
import "../../sass/styles.scss";
import { Link } from "react-router-dom";
import SplitForm from "./SplitForm.jsx";
import SplitOptions from "./SplitOptions.jsx";

const SplitBill = ({ arrayOfGroups}) => {
  const [checkedGroup, setCheckedGroup] = useState("");
  const [debts, setDebts] = useState([]);

  const checkOption = (checked) => {
    setCheckedGroup(checked);
  };

  useEffect(() => {
    if (checkedGroup) {
      updatingDebtsName();
    }
  }, [checkedGroup]);

  const updatingDebtsName = () => {
    const names = checkedGroup.people || [];
    const debtsList = names.map((name) => ({
      name: name,
      debt: 0,
    }));
    setDebts(debtsList);
  };

  const updateNewInfoBill = (newDebts, nameBill, total, paidBy) => {
    if (checkedGroup.nameOfGroup) {
      updateNewInfoBill(newDebts, nameBill, total, paidBy, checkedGroup.nameOfGroup);
    } else {
      alert("Please select your relevant group");
    }
  };

  return (
    <div>
      <div className="menu">
        <h1>Split bill</h1>
        <Link className="exitBtn" to="/">
          Home
        </Link>
        <Link className="addGroupBtn" to="/setting">
          Setting
        </Link>
        <Link className="exitBtn" to="/dashboard">
          Back
        </Link>
      </div>
      <div className="splitBill">
        <SplitOptions
          arrayOfGroups={arrayOfGroups}
          checkOption={checkOption}
        />
        <SplitForm
          arrayOfGroups={arrayOfGroups}
          checkedGroup={checkedGroup}
          debts={debts}
          updateNewInfoBill={updateNewInfoBill}
        />
      </div>
    </div>
  );
};

export default SplitBill;
