import React, { useState, useEffect } from "react";
import "../../../sass/styles.scss";

const OwesBox = ({ clickedGroup }) => {
  const [lenders, setLenders] = useState([]);
  const [owners, setOwners] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [average, setAverage] = useState(0);

  const updatingBalanceDebts = () => {
    let bills = clickedGroup.bills;
    let tempObject = {};
    bills.forEach((elem) => {
      elem.debts.forEach((el) => {
        let nameKey = el.name.replace(" ", "");
        if (!tempObject.hasOwnProperty(el.name)) {
          tempObject[nameKey] = { name: el.name, debt: el.debt };
        } else {
          tempObject[nameKey].debt += el.debt;
        }
      });
    });

    let updatedOwners = [];
    let updatedLenders = [];

    for (let elem in tempObject) {
      let newDebt = tempObject[elem].debt - average;
      tempObject[elem].debt = newDebt;
      if (newDebt < 0) {
        updatedOwners.push({
          name: tempObject[elem].name,
          debt: Math.round(newDebt * 100) / 100,
        });
      } else if (newDebt > 0) {
        updatedLenders.push({
          name: tempObject[elem].name,
          debt: Math.round(newDebt * 100) / 100,
        });
      }
    }

    setOwners(updatedOwners);
    setLenders(updatedLenders);
  };

  const summaryOfBills = () => {
    if (clickedGroup.bills.length !== 0) {
      let bills = clickedGroup.bills;

      let totalAmount =
        bills.length === 1
          ? bills[0].total
          : bills.reduce((a, b) => a + b.total, 0);

      let average =
        totalAmount / parseFloat(clickedGroup.people.length);

      setAverage(parseFloat(average));
      setTotalAmount(parseFloat(totalAmount));

      updatingBalanceDebts();
    }
  };

  useEffect(() => {
    if (clickedGroup.bills.length > 0) {
      summaryOfBills();
    }
  }, [clickedGroup]);

  return (
    <div className="owesBox">
      <h1>Who owes whom</h1>
      <div className="d-flex justify-content-between">
        <div>
          {owners.map((elem, index) => (
            <button type="button" className="btn btn-primary m-1" key={index}>
              {elem.name}{" "}
              <span
                className="badge badge-secondary"
                style={{ backgroundColor: "grey" }}
              >
                {elem.debt}&#8377;
              </span>
            </button>
          ))}
        </div>

        <div>
          {lenders.map((elem, index) => (
            <button type="button" className="btn btn-primary m-1" key={index}>
              {elem.name}{" "}
              <span
                className="badge badge-secondary"
                style={{ backgroundColor: "grey" }}
              >
                {elem.debt}&#8377;
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OwesBox;
