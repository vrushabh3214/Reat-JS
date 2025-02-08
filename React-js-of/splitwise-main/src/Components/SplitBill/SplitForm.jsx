import React, { useState } from "react";
import "../../sass/styles.scss";
import { Link } from "react-router-dom";
import SplitFormInputs from "./SplitFormInputs.jsx";
import SplitPeople from "./SplitPeople.jsx";

const SplitForm = ({ checkedOption, checkedGroup, debts, updateNewInfoBill }) => {
  const [nameBill, setNameBill] = useState("");
  const [total, setTotal] = useState("");
  const [currentDebts, setCurrentDebts] = useState(debts);
  const [paidBy, setPaidBy] = useState("");

  const onHandleFormInputs = (name, totalValue) => {
    setNameBill(name);
    setTotal(totalValue);
  };

  const updateBillInfo = (e) => {
    e.preventDefault(); // Prevent default link behavior
    if (nameBill && total) {
      updateNewInfoBill(currentDebts, nameBill, total, paidBy);
    } else {
      alert("Please add name of bill and total");
    }
  };

  const updateNewDebts = (newDebts, paidByValue) => {
    setCurrentDebts(newDebts);
    setPaidBy(paidByValue);
  };

  return (
    <form className="splitForm d-flex">
      <SplitFormInputs
        checkedOption={checkedOption}
        onHandleFormInputs={onHandleFormInputs}
      />
      {checkedGroup && (
        <SplitPeople
          checkedGroup={checkedGroup}
          total={total}
          debts={currentDebts}
          updateNewDebts={updateNewDebts}
        />
      )}
      <div>
        <Link
          className="addBillBtn"
          to="/dashboard"
          onClick={updateBillInfo}
        >
          Submit Bill
        </Link>
      </div>
    </form>
  );
};

export default SplitForm;
