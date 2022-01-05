import React from "react";

// Antd components
import { Layout } from "antd";

// Components
import Sidebar from "../sidebar/Sidebar";

const { Content, Footer } = Layout;

export default function AppLayout({ children }) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout className="site-layout">
        <Content style={{ margin: "0 16px", padding: "50px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, height: "100%", marginTop: "50px" }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: "#1C5BA1",
            color: "#e3e3e3",
          }}
        >
          BBVA Client Ticketing System ©2020 Created by BBVA
        </Footer>
      </Layout>
    </Layout>
  );
}
