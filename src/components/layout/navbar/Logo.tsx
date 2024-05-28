import { FC } from "react";
import logo from "/logo/biMaksLogo.svg";

const Logo: FC = () => {
  return (
    <nav className="border-gray-200 px-2 py-2.5 rounded dark:bg-gray-800">
      <div className="flex items-center">
        <img src={logo} className="h-10 mr-3 " alt="medium.ia logo" />
      </div>
    </nav>
  );
};

export default Logo;
