import React, { useState, useEffect } from "react";
import "../../sass/styles.scss";

const SplitPeople = ({ checkedGroup, debts, updateNewDebts, total }) => {
  const [selectedRadio, setSelectedRadio] = useState("");
  const [paidBy, setPaidBy] = useState(checkedGroup.people[0]);
  const [debtsState, setDebtsState] = useState(debts);

  const handleRadioBtn = (e) => {
    const value = e.target.value;
    setSelectedRadio(value);
    setPaidBy(checkedGroup.people[0]); // Set default paidBy when selecting option

    if (value === "equally") {
      // Handle equally split logic
      const newDebts = debtsState.map(debt => ({
        ...debt,
        debt: debt.name === paidBy ? total : 0,
      }));
      setDebtsState(newDebts);
      updateNewDebts(newDebts, paidBy);
    }
  };

  const handlePaidByChange = (e) => {
    const value = e.target.value;
    setPaidBy(value);

    const newDebts = debtsState.map(debt => ({
      ...debt,
      debt: debt.name === value ? total : 0,
    }));
    setDebtsState(newDebts);
    updateNewDebts(newDebts, value);
  };

  const handleDebtsChange = (e, indx) => {
    const value = Math.round(e.target.value * 100) / 100; // Round to 2 decimal places
    const newDebts = [...debtsState];
    newDebts[indx].debt = value;
    setDebtsState(newDebts);
    updateNewDebts(newDebts, "Shared");
  };

  // Update debts when props change
  useEffect(() => {
    setDebtsState(debts);
  }, [debts]);

  return (
    <div className="splitBox">
      <div className="splitInputs">
        <div className="custom-control custom-radio custom-control-inline">
          <input
            id="equally"
            type="radio"
            value="equally"
            className="custom-control-input"
            onChange={handleRadioBtn}
            checked={selectedRadio === "equally"}
          />
          <label htmlFor="equally" className="custom-control-label">
            Equally
          </label>
        </div>
        <div className="custom-control custom-radio custom-control-inline">
          <input
            id="unequally"
            type="radio"
            value="unequally"
            className="custom-control-input"
            onChange={handleRadioBtn}
            checked={selectedRadio === "unequally"}
          />
          <label htmlFor="unequally" className="custom-control-label">
            Unequally
          </label>
        </div>
      </div>
      <div className="form-group">
        <label>Paid By</label>
        {selectedRadio === "equally" && (
          <select
            className="form-control"
            value={paidBy}
            onChange={handlePaidByChange}
          >
            {checkedGroup.people.map((name, indx) => (
              <option key={indx} value={name}>
                {name}
              </option>
            ))}
          </select>
        )}
      </div>
      <ul className="unequallyInputs">
        {checkedGroup.people.map((name, indx) => (
          <li key={indx}>
            {name}
            {selectedRadio === "unequally" && (
              <input
                type="number"
                value={debtsState[indx]?.debt || ""}
                data-indx={indx}
                className="custom-control-input"
                onChange={(e) => handleDebtsChange(e, indx)}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SplitPeople;
