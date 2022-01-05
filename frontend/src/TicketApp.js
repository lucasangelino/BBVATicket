import React from "react";

import { BrowserRouter } from "react-router-dom";

//Components
import Layout from "./components/layout/Layout";
import App from "./components/app/App";

export const TicketApp = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
    </>
  );
};
