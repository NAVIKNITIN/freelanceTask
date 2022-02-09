import React from "react";

const Content1 = () => {
  return (
    <div className="ContentComponent3">
      <div
        style={{ alignItems: "flex-start", justifyContent: "center" }}
        className="content1"
      >
        <div style={{ display: "grid" }}>
          <img
            src="https://pancakeswap.finance/images/lottery/ticket-l.png"
            width="123px"
            height="83px"
            alt=""
            className="star3"
          />
        </div>

        <div>
          <div className="" style={{color:"white"}}>
            <h2  className="">
              Connect your wallet
            </h2>
            <h2  className="">
              to check if you've won!
            </h2>
            <button className="BTNTicket" >
              Connect Wallet
            </button>
          </div>
        </div>

        <div style={{ display: "grid" }}>
          <img
            src="https://pancakeswap.finance/images/lottery/ticket-r.png"
            width="121px"
            height="72px"
            alt=""
            className="star5"
          />
        </div>
      </div>
    </div>
  );
};

export default Content1;
