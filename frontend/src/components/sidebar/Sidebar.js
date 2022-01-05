import React from "react";
// Antd components

import Navbar from "../navbar/Navbar";

export default function Sidebar() {
  // This component return Navbar instead of sidebar.
  // TODO: Remove Sidebar component and import Navbar directly within AppLayout.
  return <Navbar />;
}
