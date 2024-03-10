import React from "react";
import Menu from "../components/Menu"
import { Outlet } from "react-router-dom";
import { items } from "../data/item";
import {Link} from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <Menu/>  
      <div className="mainContainer">
        <div className="sidebar">
          {items.map(item=><div><Link to={`/contacts/${item.id}`}>{item.name}</Link></div>)}
        </div>
        <Outlet/>
        </div>
    </div>
  );
};
export default Home;
