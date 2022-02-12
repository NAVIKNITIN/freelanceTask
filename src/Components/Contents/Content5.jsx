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
        <div>
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
      </div>
      <div className="HTP--body4">4</div>
      <div className="HTP--body5">5</div>
    </div>
  );
};

export default Content5;
