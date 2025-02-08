import React, { useState } from "react";
import "../../sass/styles.scss";

const SplitFormInputs = ({ checkedOption, onHandleFormInputs }) => {
  const [nameBill, setNameBill] = useState("");
  const [total, setTotal] = useState("");

  const handleFormInputs = (e) => {
    const { name, value, type } = e.target;
    const formattedValue =
      type === "number" ? Math.round(value * 100) / 100 : value;

    if (name === "nameBill") {
      setNameBill(formattedValue);
    } else if (name === "total") {
      setTotal(formattedValue);
    }

    // Call the parent function with updated values
    onHandleFormInputs(nameBill, total);
  };

  const isCreateGroupOption = checkedOption === "Create a group";

  return (
    <div>
      {isCreateGroupOption && <input placeholder="Name of group" />}
      <input
        name="nameBill"
        value={nameBill}
        placeholder="Name of the bill"
        className="form-control"
        onChange={handleFormInputs}
      />

      <input
        type="number"
        name="total"
        value={total}
        required
        placeholder="Total sum"
        className="form-control"
        onChange={handleFormInputs}
      />
    </div>
  );
};

export default SplitFormInputs;
