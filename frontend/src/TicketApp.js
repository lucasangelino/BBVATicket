import React from "react";
import { Router } from "./router/router";

import { BrowserRouter } from "react-router-dom";

//Components
import Layout from "./components/layout/Layout";

export const TicketApp = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </>
  );
};
