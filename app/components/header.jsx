import { ScanLine, Dot, Bell } from "lucide-react";

const Header = () => {
  return (
    <header className="shadow-md px-6 py-4 flex justify-between items-center">
      <ScanLine className="text-green-500" />
      <p className="flex items-center font-medium text-gray-600">
        <Dot className="text-green-500 mr-2" />{" "}
        <span className="text-gray-500">Wallet (0x26636)</span>
      </p>
      <Bell className="text-green-500 hover:text-gray-600 transition-colors cursor-pointer" />
    </header>
  );
};

export default Header;
