import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Andrew from "./Andrew";
import Brady from "./Brady";

const Team = () => {
  return (
    <div id="main">
      <h1>Meet the Team</h1>
      <div className="button-container">
        <Link to="/team/brady">
          <button id="link-btn">Brady</button>
        </Link>
        <Link to="/team/andrew">
          <button id="link-btn">Andrew</button>
        </Link>
      </div>
      <Routes>
        <Route path="brady" element={<Brady />} />
        <Route path="andrew" element={<Andrew />} />
      </Routes>
    </div>
  );
};

export default Team;
