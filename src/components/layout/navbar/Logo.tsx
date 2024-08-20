import { FC } from "react";
// import logo from "/logo/biMaksLogo.svg";

const Logo: FC = () => {
  return (
    <div className="flex flex-col items-start">
      <h1 className="text-blue-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        bimaks
      </h1>
      <p className="text-blue-500 text-xs sm:text-sm md:text-base lg:text-lg mt-[-2px] sm:mt-[-4px] md:mt-[-6px] lg:mt-[-8px]">
        TURKMENISTAN
      </p>
    </div>
  );
};

export default Logo;
