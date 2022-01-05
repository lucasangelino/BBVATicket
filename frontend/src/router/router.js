import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import CheckIn from "../components/desk/CheckIn";
import Desk from "../components/desk/Desk";
import Queue from "../components/queue/Queue";
import NewTicket from "../components/ticket/NewTicket";

export const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<CheckIn />} />
      <Route path="/checkin" element={<CheckIn />} />
      <Route path="/queue" element={<Queue />} />
      <Route path="/create-ticket" element={<NewTicket />} />
      <Route path="/desk" element={<Desk />} />
    </Routes>
  );
};
