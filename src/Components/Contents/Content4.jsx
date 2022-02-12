import React, { useState } from "react";
import "./content4.scss"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';

import Card1 from "./Content4Cards/Card1";
import Card2 from "./Content4Cards/Card2";


const Content4 = () => {

  return (
    <div className="ContentComponent4">
      <div
        style={{
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
          <h1 style={{ color: "white" }}>
            <b>Finished Rounds</b>
          </h1>
      <Router style={{diplay:"grid",justifyContent:"center"}}>
        <div className="nav">
          <NavLink
          activeClassName="active"
          className="nav__Link"
            to="/"
          >
            All Hisory
          </NavLink>
          <NavLink
            to="yourhistory"
            className="nav__Link"
            activeClassName="active"
          >
            Your History
          </NavLink>
        </div>
        <Routes>
          <Route exact path="/" element={<Card1 />} />
          <Route path="yourhistory" element={<Card2 />} />
        </Routes>
      </Router>
      </div>
      </div>
  );
};

export default Content4;
