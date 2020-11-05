import React from "react";
import MenuItem from "./menuItem";
import MenuTree from "./menuTree";

export default (props) => (
  <ul className="sidebar-menu">
    <MenuItem path="#" icon="dashboard" label="Dashboard"></MenuItem>
    <MenuTree label="Register" icon="edit">
      <MenuItem
        path="#billingCycles"
        label="Payment Pages"
        icon="usd"
      ></MenuItem>
    </MenuTree>
  </ul>
);
