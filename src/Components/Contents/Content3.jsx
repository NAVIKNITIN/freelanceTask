import React from 'react';

const Content1 = () => {
  return (
    <div className="ContentComponent3">
    <div
      style={{ alignItems: "flex-start",justifyContent:"center" }}
      className="content1"
    >
        <div style={{display:"grid"}} > <img
        src="https://pancakeswap.finance/images/lottery/star-small.png"
        width="70px"
        height="62px"
        alt=""
        className="star1"
      />

      <img
        src="https://pancakeswap.finance/images/lottery/star-big.png"
        width="124px"
        height="109px"
        alt=""
        className="star2"
      />

      <img
        src="https://pancakeswap.finance/images/lottery/ticket-l.png"
        width="123px"
        height="83px"
        alt=""
        className="star3"
      /></div>
     
      <div>
      <h3 style={{color:"white"}}>The PancakeSwap Lottery</h3>
      <h1 >
        <span style={{color:"white"}}>$128,719</span>
      </h1>
      <h2 style={{color:"white"}}>
        in prizes!
      </h2>
      </div>
     
     <div style={{display:"grid"}}>
     <img
        src="https://pancakeswap.finance/images/lottery/three-stars.png"
        width="130px"
        height="144px"
        alt=""
        className="star4"
      />
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
  )
};

export default Content1;
