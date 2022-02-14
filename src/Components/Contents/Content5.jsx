import React from "react";
import "./Content5.scss";
const Content5 = () => {
  return (
    <div className="HTP">
      <div className="HTP--body1">
        <h2>How to Play</h2>
        <p>
          If the digits on your tickets match the winning numbers in the correct
          order, you win a portion of the prize pool. Simple!
        </p>
      </div>
      <div className="HTP--body2">
        <div className="HTP--body2--card">
          <p className="HTP--body2--card--h4">Step 1</p>
          <p className="HTP--body2--card--h2">Buy Tickets</p>
          <p className="HTP--body2--card--p">
            Prices are set when the round starts, equal to 5 USD in CAKE per
            ticket.
          </p>
        </div>
        <div className="HTP--body2--card">
          <p className="HTP--body2--card--h4">Step 2</p>
          <p className="HTP--body2--card--h2">Wait for the Draw</p>
          <p className="HTP--body2--card--p">
            There is one draw every day alternating between 0 AM UTC and 12 PM
            UTC.
          </p>
        </div>
        <div className="HTP--body2--card">
          <p className="HTP--body2--card--h4">Step 3</p>
          <p className="HTP--body2--card--h2">Check for Prizes</p>
          <p className="HTP--body2--card--p">
            Once the round’s over, come back to the page and check to see if
            you’ve won!
          </p>
        </div>
      </div>
      <div className="HTP--body3">
        <div className="HTP--body3--main1">
          <h2>Winning Criteria</h2>
          <h3>
            The digits on your ticket must match in the correct order to win.
          </h3>
          <p className="HTP--body3--paragraph">
            <p className="HTP--body3--paragraph--head">
              Here’s an example lottery draw, with two tickets, A and B.
            </p>
            <p className="HTP--body3--paragraph--body">
              <ul>
                <li>
                  Ticket A: The first 3 digits and the last 2 digits match, but
                  the 4th digit is wrong, so this ticket only wins a “Match
                  first 3” prize.
                </li>
                <li>
                  Ticket B: Even though the last 5 digits match, the first digit
                  is wrong, so this ticket doesn’t win a prize.
                </li>
              </ul>
            </p>
            <p className="HTP--body3--paragraph--footer">
              Prize brackets don’t ‘stack’: if you match the first 3 digits in
              order, you’ll only win prizes from the ‘Match 3’ bracket, and not
              from ‘Match 1’ and ‘Match 2’.
            </p>
          </p>
        </div>
        <div className="HTP--body3--main2">
          <div className="HTP--body3--main2--card">
            <div className="HTP--body3--main2--card__circle">
              <p style={{ backgroundColor: "red" }}>2</p>
              <p style={{ backgroundColor: "green" }}>3</p>
              <p style={{ backgroundColor: "blue" }}>4</p>
              <p style={{ backgroundColor: "yellow" }}>5</p>
              <p style={{ backgroundColor: "grey" }}>6</p>
              <p style={{ backgroundColor: "purple" }}>7</p>
            </div>
            <div className="HTP--body3--main2--card--h2">
              <p className="HTP--body3--main2--card--h2--title">A</p>
              <p className="HTP--body3--main2--card--h2--body">9</p>
              <p className="HTP--body3--main2--card--h2--body">5</p>
              <p className="HTP--body3--main2--card--h2--body">1</p>
              <p className="HTP--body3--main2--card--h2--body">9</p>
              <p className="HTP--body3--main2--card--h2--body">8</p>
              <p className="HTP--body3--main2--card--h2--body">7</p>
            </div>
            <div className="HTP--body3--main2--card--h3">
              <p className="HTP--body3--main2--card--h3--title">B</p>
              <p className="HTP--body3--main2--card--h3--body">9</p>
              <p className="HTP--body3--main2--card--h3--body">5</p>
              <p className="HTP--body3--main2--card--h3--body">1</p>
              <p className="HTP--body3--main2--card--h3--body">9</p>
              <p className="HTP--body3--main2--card--h3--body">8</p>
              <p className="HTP--body3--main2--card--h3--body">7</p>
            </div>
          </div>
        </div>
      </div>
      <div className="HTP--body4">
        <div className="HTP--body4--main1">
          <p className="HTP--body4--main1--c1_head">Prize Funds</p>
          <p className="HTP--body4--main1--c1_silent">
            The prizes for each lottery round come from three sources:
          </p>
          <p className="HTP--body4--main1--c1_head2">Ticket Purchases</p>
          <p className="HTP--body4--main1--c1_silent">
            <ul>
              <li>
                100% of the CAKE paid by people buying tickets that round goes
                back into the prize pools.
              </li>
            </ul>
          </p>
          <p className="HTP--body4--main1--c1_head2">Rollover Prizes</p>
          <p className="HTP--body4--main1--c1_silent">
            <ul>
              <li>
                After every round, if nobody wins in one of the prize brackets,
                the unclaimed CAKE for that bracket rolls over into the next
                round and are redistributed among the prize pools.
              </li>
            </ul>
          </p>
          <p className="HTP--body4--main1--c1_head2">CAKE Injections</p>
          <p className="HTP--body4--main1--c1_silent">
            <ul>
              <li>
                An average total of 35,000 CAKE from the treasury is added to
                lottery rounds over the course of a week. This CAKE is of course
                also included in rollovers! Read more in our guide to{" "}
                <a href="# " style={{ textDecoration: "none", color: "red" }}>
                  CAKE Tokenomics
                </a>
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div className="HTP--body5">
        <img
          src="https://pancakeswap.finance/images/lottery/tombola.png"
         className="HTP--body5__img"
        />
     
      <div className="HTP--body5__body">
        <h2
          scale="md"
          color="text"
          className=""
        >
          Still got questions?
        </h2>
        <div color="text" className="">
          Check our in-depth guide on
          
        </div>
        <a
            href="https://docs.pancakeswap.finance/products/lottery/lottery-guide"
            className="sc-gsDKAQ sc-cNKqjZ eRrOYi PEdbg sc-e6987a7f-6 tRsSH"
    style={{textDecoration:"none",color:"red"}}
>
            how to play the PancakeSwap lottery!
          </a>
      </div>
      </div>
    </div>
  );
};

export default Content5;
