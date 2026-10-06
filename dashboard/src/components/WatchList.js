import React , {useState,useContext }from "react";
import {Tooltip,Grow} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

import {watchlist} from "../data/data";
import GeneralContext from "./GeneralContext";


import { DoughnutChart } from "./DoughnoutChart";
const labels = watchlist.map((subArray) => subArray["name"]);
const data = {
  labels,
  datasets: [
    {
      data: watchlist.map((stock) => stock.price),
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(153, 102, 255)",
        "rgb(255, 159, 64)",
      ],
      borderWidth: 1,
    },
  ],
};
const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItems key={index} stock={stock}/>

        })}
      </ul>

      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;

const WatchListItems = ({stock}) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  }

  const handleMouseExit = (e) => {
    setShowWatchlistActions(false);
  }

  return(
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
    <div className="item">
      <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
      <div className="itemInfo">
        <span className="percent">{stock.percent}%</span>
        {stock.isDown?(<KeyboardArrowDownIcon className="down" />):(<KeyboardArrowUpIcon className="up" />)}
        <span className="price">{stock.price}/-</span>
      </div>
    </div>
    {showWatchlistActions && <WatchListActions uid={stock.name}/>}
    </li>
  )
}

const WatchListActions = ({uid}) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  return <span className="actions">
    <span>
      <Tooltip title="Buy (B)" placement="top" TransitionComponent={Grow} arrow onClick={handleBuyClick}>
        <button className="buy">Buy</button>
      </Tooltip>
      <Tooltip title="Sell (S)" placement="top" TransitionComponent={Grow} arrow>
        <button className="sell">Sell</button>
      </Tooltip>
      <Tooltip title="Analytics (A)" placement="top" TransitionComponent={Grow} arrow>
        <button className="action">
          <BarChartOutlinedIcon className="icon" />
        </button>
      </Tooltip>
      <Tooltip title="More" placement="top" TransitionComponent={Grow} arrow>
        <button className="action">
          <MoreHorizOutlinedIcon className="icon" />
        </button>
      </Tooltip>
    </span>
  </span>
}
