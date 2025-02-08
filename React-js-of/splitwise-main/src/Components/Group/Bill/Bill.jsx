import React from "react";
import "../../../sass/styles.scss";

const Bill = (props) => {
  return (
    <div className="bill">
      <div className="d-flex justify-content-between">
        <button type="button" className="btn btn-warning m-1">
          {props.name} Total:{" "}
          <span
            className="badge badge-secondary"
            style={{ backgroundColor: "grey" }}
          >
            {props.total}&#8377;
          </span>
        </button>
        <button type="button" className="btn btn-warning m-1">
          Paid By:{" "}
          <span
            className="badge badge-secondary"
            style={{ backgroundColor: "grey" }}
          >
            {props.paidBy}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Bill;
