"use client";
import { useState } from "react";
import Intro from "../components/onboardingandintro/intro1";
import EnterSeed from "../components/screens/EnterSeed";

export default function TopMovers() {
  const [state, setState] = useState("welcome");

  const changeState = (state) => {
    setState(state);
  };
  const Render = () => {
    switch (state) {
      case "welcome":
        return <Intro changeState={changeState} />;
      case "seed":
        return <EnterSeed changeState={changeState} />;

      default:
        break;
    }
  };
  return <Render />;
}
