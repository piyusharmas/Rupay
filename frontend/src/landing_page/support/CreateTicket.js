import React from "react";

function CreateTicket() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row p-2">
        <h2 className="mt-5 mb-5 p-2">
          To create a ticket, select a relevant topic
        </h2>
        <div className="col p-5">
          <h5><i class="fa-solid fa-circle-plus"></i> Account Opening</h5>
          <div style={{ lineHeight: "2.3" }}>
            <a href="/">Online Account Opening</a>
            <br />
            <a href="/">Offline Account Opening</a>
            <br />
            <a href="/">Company, Partnership and HUF Account Opening</a>
            <br />
            <a href="/">NRI Account Opening</a>
            <br />
            <a href="/">Charges at Credon</a>
            <br />
            <a href="/">Credon XYZ Third Bank 3-in-1 Account</a>
            <br />
            <a href="/">Getting Started</a>
          </div>
        </div>
        <div className="col p-5">
          <h5><i class="fa-solid fa-user"></i> Your Credon Account</h5>
          <div style={{ lineHeight: "2.3" }}>
            <a href="/">Login Credentials</a>
            <br />
            <a href="/">Account Modification and Segment Addition</a>
            <br />
            <a href="/">DP ID and bank details</a>
            <br />
            <a href="/">Your Profile</a>
            <br />
            <a href="/">Transfer and conversion of shares</a>
            <br />
          </div>
        </div>
        <div className="col p-5">
          <h5><i class="fa-solid fa-chart-column"></i> Your Credon Account</h5>
          <div style={{ lineHeight: "2.3" }}>
            <a href="/">Margin/leverage, Product and Order types</a>
            <br />
            <a href="/">Kite Web and Mobile</a>
            <br />
            <a href="/">Trading FAQs</a>
            <br />
            <a href="/">Corporate Actions</a>
            <br />
            <a href="/">Sentinel</a>
            <br />
            <a href="/">Kite API</a>
            <br />
            <a href="/">Pi and other platforms</a>
            <br />
            <a href="/">Stockreports+</a>
            <br />
            <a href="/">GTT</a>
          </div>
        </div>
      </div>
      <div className="row p-2">
        <div className="col p-5">
          <h5><i class="fa-solid fa-credit-card"></i> Funds</h5>
          <div style={{ lineHeight: "2.3" }}>
            <a href="/">Adding Funds</a>
            <br />
            <a href="/">Fund Withdrawal</a>
            <br />
            <a href="/">eMandates</a>
            <br />
            <a href="/">Adding Bank Accounts</a>
          </div>
        </div>
        <div className="col p-5">
          <h5><i class="fa-solid fa-circle-notch"></i> Console</h5>
          <div style={{ lineHeight: "2.3" }}>
            <a href="/">Reports</a>
            <br />
            <a href="/">Ledger</a>
            <br />
            <a href="/">Portfolio</a>
            <br />
            <a href="/">60 Day Challenge</a>
            <br />
            <a href="/">Referral Program</a>
            <br />
          </div>
        </div>
        <div className="col p-5">
          <h5><i class="fa-regular fa-circle-dot"></i> Coin</h5>
          <div style={{ lineHeight: "2.3" }}>
            <a href="/">Understanding Mutual Funds</a>
            <br />
            <a href="/">About Coin</a>
            <br />
            <a href="/">Buying and Selling through Coin</a>
            <br />
            <a href="/">Starting a SIP</a>
            <br />
            <a href="/">Managing your Portfolio</a>
            <br />
            <a href="/">Coin API</a>
            <br />
            <a href="/">Moving to Coin</a>
            <br />
            <a href="/">Government Securities</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;