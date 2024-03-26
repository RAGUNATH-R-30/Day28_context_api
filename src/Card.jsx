import React, { useContext, useState } from "react";
import UserContext from "./UserContext";

function Card({ data }) {
  const [show, setshow] = useState(false);
  const [quantity, setquantiy] = useState(0);
  const { total, settotal } = useContext(UserContext);

  let totalupdate = (num) => {
    let totalprice = num * data.price;
    settotal((prevtotal) => prevtotal + totalprice - quantity * data.price);
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
              <hr />
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
                    <li
                      onClick={() => {
                        setquantiy(0);
                        totalupdate(0);

                        setshow(false);
                      }}
                    >
                      0
                    </li>
                    <li
                      onClick={() => {
                        setquantiy(1);
                        totalupdate(1);
                        setshow(false);
                      }}
                    >
                      1
                    </li>
                    <li
                      onClick={() => {
                        setquantiy(2);
                        totalupdate(2);
                        setshow(false);
                      }}
                    >
                      2
                    </li>
                    <li
                      onClick={() => {
                        setquantiy(3);
                        totalupdate(3);

                        setshow(false);
                      }}
                    >
                      3
                    </li>
                    <li
                      onClick={() => {
                        setquantiy(4);
                        totalupdate(4);

                        setshow(false);
                      }}
                    >
                      4
                    </li>
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
        <div className="row mt-5">
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
                SUB TOTAL
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
              >{`${data.price}$`}</p>
            </div>
          </div>
        </div>

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

        {/* <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 text-start">
            <div>
              <p
                style={{
                  fontFamily: "monospace",
                  fontWeight: "bold",
                  fontSize: 16,
                  marginLeft: 10,
                }}
              >
                TOTAL
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
                  fontWeight: "bold",
                }}
              >{`Quantity:${quantity} ${total}$`}</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Card;

{
  /* <div class="dropdown">
<button
  class="btn btn-secondary dropdown-toggle show"
  type="button"
  data-bs-toggle="dropdown"
  aria-expanded="false"
>
  1
</button>

<ul class="dropdown-menu ">
  <li>
    <a class="dropdown-item">
      2
    </a>
  </li>
  <li>
    <a class="dropdown-item" >
      3
    </a>
  </li>
  <li>
    <a class="dropdown-item" >
      4
    </a>
  </li>
</ul>
</div> */
}
