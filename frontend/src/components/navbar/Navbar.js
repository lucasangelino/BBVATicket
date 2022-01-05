import React from "react";
import { Link } from "react-router-dom";
import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import Logo from "../../bbva_logo.jpg";

const { Header } = Layout;

export default function Navbar() {
  return (
    <Header
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        backgroundColor: "#1C5BA1",
      }}
    >
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ backgroundColor: "#1C5BA1" }}
      >
        <Menu.Item key="1">
          <img src={Logo} alt="logo" style={{ width: "100px" }} />
        </Menu.Item>
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to="/checkin">Checkin</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          <Link to="/queue">Queue</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<DesktopOutlined />}>
          <Link to="/create-ticket">Create Ticket</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}
