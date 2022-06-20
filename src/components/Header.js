import React, { useContext } from "react";
import { Link } from "react-router-dom";
import TodayContext from '../store/today-context'

const Header = () => {

  const context = useContext(TodayContext)

  return (
    <header>
      <Link to="/">
        <button className="link-btn">Home</button>
      </Link>
      <Link to="/addTask">
        <button className="link-btn">Add Task</button>
      </Link>
      <Link to="/team">
        <button className="link-btn">Team</button>
      </Link>
      <Link to="/today">
        <button className='link-btn' id='today'>Today's List<div id='today-count'>{context.todaysItems.length}</div></button>
      </Link>
    </header>
  );
};

export default Header;
