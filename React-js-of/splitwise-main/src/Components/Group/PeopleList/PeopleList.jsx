import React from 'react';

const PeopleList = ({ clickedGroup }) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <h1>Group Members</h1>
      {clickedGroup.people.map((name, indx) => (
        <button
          type="button"
          key={indx}
          className="btn btn-primary m-2"
          disabled
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default PeopleList;
