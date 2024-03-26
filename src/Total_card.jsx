import React from "react";
import { useContext } from "react";
import UserContext from "./UserContext";
import "/node_modules/bootstrap/dist/css/bootstrap.css";

function Total_card() {
    const {total,settotal}=useContext(UserContext)
  return (
    <div className="card mt-4 text-start" style={{width:"100%"}}>
      <div className="card-body">
        <h5 className="card-title">Cart:</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">Cart Value is:{total}</h6>
        
        
      </div>
    </div>
  );
}

export default Total_card;
