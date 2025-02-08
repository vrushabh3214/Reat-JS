import React, { useState } from "react";
import "../../sass/styles.scss";

const SplitOptions = ({ arrayOfGroups, checkOption }) => {
  const [chosenOption, setChosenOption] = useState("Add to group");
  const [checkedGroup, setCheckedGroup] = useState("");

  const handleChange = (e) => {
    const selectedOption = e.target.value;
    setChosenOption(selectedOption);

    const group = arrayOfGroups.find(group => group.nameOfGroup === selectedOption);
    if (group) {
      setCheckedGroup(group);
      checkOption(group);
    }
  };

  const isEmpty = () => arrayOfGroups.length !== 0;

  return (
    <select
      className="options"
      value={chosenOption}
      onChange={handleChange}
    >
      <option value="Add to group" disabled>
        Add to group...
      </option>
      {isEmpty() &&
        arrayOfGroups.map((group, indx) => (
          <option key={indx} value={group.nameOfGroup}>
            {group.nameOfGroup}
          </option>
        ))}
    </select>
  );
};

export default SplitOptions;
