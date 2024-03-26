import React from "react";
import { useContext } from "react";
import UserContext from "./UserContext";
import "/node_modules/bootstrap/dist/css/bootstrap.css";

function Total_card() {
  const { total, settotal } = useContext(UserContext);
  const { totalquantity, settotalquantiy } = useContext(UserContext);
  return (
    <div className="card mx-5 text-start sticky-top" style={{}}>
      <div className="card-body">
        <h5 className="card-title" style={{ fontFamily: "monospace" }}>
          Cart:
        </h5>
        <hr />
        <h6
          className="card-subtitle mb-2 text-body-secondary"
          style={{ fontFamily: "monospace", fontWeight: "bold" }}
        >
          Total Quantity is:{totalquantity}
        </h6>
        <h6
          className="card-subtitle mb-2 text-body-secondary"
          style={{ fontFamily: "monospace", fontWeight: "bold" }}
        >
          Total Value is:{total}$
        </h6>
        <h6></h6>
      </div>
    </div>
  );
}

export default Total_card;
