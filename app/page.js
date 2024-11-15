"use client";

import { useState } from "react"; // Don't forget to import useState
import Dashboard from "./components/screens/dashboard";
import TopMovers from "./components/screens/TopMovers";
import NavBar from "./components/ui/Navbar";
import ReceiveScreen from "./components/screens/ReceiveScreen";
import SwapScreen from "./components/screens/SwapScreen";

const Home = () => {
  const [uistate, setUistate] = useState("dashboard");

  const changeUistate = (state) => {
    // console.log(state)
    setUistate(state);
  };

  const renderContent = () => {
    switch (uistate) {
      case "dashboard":
        return <Dashboard changeUistate={changeUistate} />;
      case "topmovers":
        return <TopMovers />;
      case "receive":
        return <ReceiveScreen changeUistate={changeUistate} />;
      case "swap":
        return <SwapScreen changeUistate={changeUistate} />;
      case "send":
        return <Dashboard changeUistate={changeUistate} />;
      default:
        return <Dashboard changeUistate={changeUistate} />;
    }
  };

  return (
    <>
      {renderContent()}
      <NavBar changeUistate={changeUistate} />
    </>
  );
};

export default Home;
