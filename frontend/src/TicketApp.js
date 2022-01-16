import React from "react";

import { BrowserRouter } from "react-router-dom";

//Components
import Layout from "./components/layout/Layout";
import App from "./components/app/App";
import { UIProvider } from "./context/uiContext";

export const TicketApp = () => {
  return (
    <>
      <BrowserRouter>
        <UIProvider>
          <Layout>
            <App />
          </Layout>
        </UIProvider>
      </BrowserRouter>
    </>
  );
};
