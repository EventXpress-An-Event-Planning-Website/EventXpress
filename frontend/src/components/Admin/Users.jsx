import React from "react";
import SideBar from "./SideBar";
import UsersMain from "./UsersMain";

function Users() {
  return (
    <div>
      <SideBar value="2" />
      <UsersMain />
    </div>
  );
}

export default Users;
