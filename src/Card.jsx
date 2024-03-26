import React, { useContext, useState } from "react";
import UserContext from "./UserContext";

function Card({ data }) {
  const [show, setshow] = useState(false);
  const [quantity, setquantiy] = useState(0);
  const { total, settotal } = useContext(UserContext);
  const { totalquantity, settotalquantiy } = useContext(UserContext);

  const dropdownitems = [0, 1, 2, 3, 4, 5];

  let totalupdate = (num) => {
    let totalprice = num * data.price;
    setquantiy(num);
    setshow(false);
    settotal((prevtotal) => prevtotal + totalprice - quantity * data.price);
    settotalquantiy((prevquantity) => prevquantity - quantity + num);
  };

  return (
    <div className="card mt-4 mx-5">
      <div className="card-body">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6">
            <img
              src={`${data.thumbnail}`}
              style={{ width: 200, height: 200 }}
              alt="..."
            />
          </div>

          <div className="col-lg-5 col-md-4 col-sm-4">
            <div style={{ textAlign: "start" }}>
              <p
                style={{
                  fontFamily: "monospace",
                  fontWeight: "bolder",
                  fontSize: 22,
                }}
              >
                {`${data.title}`}
              </p>

              <span
                style={{
                  fontFamily: "monospace",
                  fontWeight: "600",
                  fontSize: 14,
                }}
              >
                Description:
              </span>
              <p
                style={{
                  fontFamily: "monospace",
                  fontWeight: "400",
                  fontSize: 14,
                  color: "grey",
                }}
              >
                {`${data.description}`}
              </p>
              <hr />
              <span
                style={{
                  fontFamily: "monospace",
                  fontWeight: "400",
                  fontSize: 14,
                }}
              >{`Instock:${data.stock}`}</span>
              <p
                style={{
                  fontFamily: "monospace",
                  fontWeight: "400",
                  fontSize: 14,
                }}
              >{`Rating:${data.rating}`}</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-6">
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <span>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle show"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ backgroundColor: "grey", opacity: 0.5 }}
                    onClick={() => {
                      setshow(!show);
                    }}
                  >
                    {`${quantity}`}
                  </button>

                  <ul
                    className={`dropdown-menu${show ? " show" : ""}`}
                    style={{
                      position: "absolute",
                      inset: "0 auto auto 0",
                      margin: "0",
                      transform: "translate(0px, 40px)",
                    }}
                  >
                    {dropdownitems.map((item) => (
                      <li key={item} onClick={() => totalupdate(item)}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </span>
              <span
                style={{
                  fontFamily: "monospace",
                  fontWeight: "400",
                  fontSize: 16,
                }}
              >{`Price:${data.price}$`}</span>
            </div>
          </div>
        </div>
        <hr />

        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 text-start">
            <div>
              <p
                style={{
                  fontFamily: "monospace",
                  fontWeight: "400",
                  fontSize: 16,
                  marginLeft: 10,
                  color: "grey",
                }}
              >
                SHIPPING
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6 text-end">
            <div>
              <p
                style={{
                  fontFamily: "monospace",
                  fontWeight: "400",
                  fontSize: 16,
                  marginRight: 10,
                }}
              >
                FREE
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
