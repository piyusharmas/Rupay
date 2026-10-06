import React from "react";

function Brokerage() {
  return (
    <div className="container mt-5">
      <div className="row p-1 text-center border-top">
        <div className="col-8 p-2 mt-5">
          <a href="/">
            <h3 className="fs-5">Brokerage Calculator</h3>
          </a>
        </div>
        <div className="col-4 p-2 mt-5">
          <a href="/">
            <h3 className="fs-5">List of charges</h3>
          </a>
        </div>
      </div>
      <div className="row p-1">
        <div className="col-8 p-4">
          <ul style={{lineHeight:"2.3", fontSize:"17px"}} className="text-muted">
            <li>
              Physical copies of contract notes: ₹20 per contract note, plus
              courier charges if required.
            </li>
            <li>
              Call & Trade and RMS auto-squareoff: Additional charge of ₹50 +
              GST per order.
            </li>
            <li>
              NRI account (non-PIS): 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              Debit balance: Orders placed while in debit will be charged ₹40
              per executed order instead of ₹20.
            </li>
          </ul>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}

export default Brokerage;