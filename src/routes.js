import React from "react";
import CeremonyView from "./components/CeremonyView";
import HouseView from "./components/HouseView";

const routes = {
  "/": () => <CeremonyView />,
  "/house": () => <HouseView />,
};
export default routes;
