import React from "react";
import { BrowserRouter, Routes, Route, Link, Redirect } from "react-router-dom";

// Antd components
import { Layout, Menu } from "antd";
import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";

// Components
import CheckIn from "../components/desk/CheckIn";
import Desk from "../components/desk/Desk";
import Queue from "../components/queue/Queue";
import NewTicket from "../components/ticket/NewTicket";

const { Content, Footer, Sider } = Layout;

export const Router = ({ children }) => {
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          style={{ backgroundColor: "#14549C", color: "#fff" }}
          hidden={false}
        >
          <div className="logo" />
          <Menu
            style={{ backgroundColor: "#14549C", color: "#fff" }}
            defaultSelectedKeys={["1"]}
            mode="inline"
          >
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
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: "0 16px" }}>
            <Routes>
              <Route path="*" element={<CheckIn />} />
              <Route path="/checkin" element={<CheckIn />} />
              <Route path="/queue" element={<Queue />} />
              <Route path="/create-ticket" element={<NewTicket />} />
              <Route path="/desk" element={<Desk />} />
            </Routes>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            BBVA Client Ticketing System ©2020 Created by BBVA
          </Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};
