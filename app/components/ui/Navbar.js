"use client";

import {
  Home,
  LucideChartNoAxesCombined,
  ArrowUpDown,
  Menu,
  Wallet,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function NavBar({ changeUistate, uistate }) {
  return (
    <div className="w-full bg-gray-850 py-4 fixed bottom-2 border-t rounded-lg border-gray-800 backdrop-blur-lg shadow-2xl">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-around items-center px-4">
          <NavItem
            changeUistate={changeUistate}
            href="home"
            icon={<Home size={24} />}
            label="Home"
            isActive={uistate === "home"}
          />
          <NavItem
            changeUistate={changeUistate}
            href="market"
            icon={<LucideChartNoAxesCombined size={24} />}
            label="Market"
            isActive={uistate === "market"}
          />

          <button
            onClick={() => {
              changeUistate("trade");
            }}
            className={cn(
              "transform -translate-y-6 relative overflow-hidden",
              uistate === "trade" &&
                "after:absolute after:w-full after:h-1 after:bg-green-500 after:bottom--2 after:left-0 after:rounded-full"
            )}
          >
            <div
              className={cn(
                "bg-gradient-to-tr from-green-500 to-green-400 p-4 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1",
                "hover:shadow-green-500/25",
                uistate === "trade"
                  ? "ring-2 ring-green-400 ring-offset-2 ring-offset-gray-850"
                  : ""
              )}
            >
              <ArrowUpDown size={24} className="text-white" />
            </div>
          </button>

          <NavItem
            changeUistate={changeUistate}
            href="assets"
            icon={<Wallet size={24} />}
            label="Assets"
            isActive={uistate === "assets"}
          />
          <NavItem
            changeUistate={changeUistate}
            href="menu"
            icon={<Menu size={24} />}
            label="Menu"
            isActive={uistate === "menu"}
          />
        </div>
      </div>
    </div>
  );
}

const NavItem = ({ href, icon, label, isActive, changeUistate }) => {
  return (
    <button
      onClick={() => {
        changeUistate(href);
      }}
      className="group relative"
    >
      <div className="flex flex-col items-center">
        <div
          className={cn(
            "mb-1 transition-colors duration-200",
            isActive
              ? "text-green-500"
              : "text-gray-400 group-hover:text-green-500"
          )}
        >
          {icon}
        </div>
        <span
          className={cn(
            "text-xs font-medium transition-colors duration-200",
            isActive
              ? "text-green-500"
              : "text-gray-400 group-hover:text-green-500"
          )}
        >
          {label}
        </span>
        {isActive && (
          <div className="absolute -bottom-4 w-full h-1 bg-green-500 rounded-full" />
        )}
      </div>
    </button>
  );
};
