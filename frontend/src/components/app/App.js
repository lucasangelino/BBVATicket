import React from "react";
import { Router } from "../../router/router";
import { SocketProvider } from "../../context/SocketContext";

export default function App() {
  return (
    <SocketProvider>
      <Router />
    </SocketProvider>
  );
}
