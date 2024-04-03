import React from "react";

const Footer: React.FC = () => {
  return (
    <section>
      <div className="w-full justify-between flex pl-[10%] pr-[10%] pt-[3%] ">
        <div>
          <img
            src="./logo/biMaksLogo.svg"
            className="bg-white p-2 w-52"
            alt="logo"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-2xl ">Links</h1>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-2xl ">Contact</h1>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-2xl ">Location</h1>
        </div>
      </div>
      <div className="air air1">
        <div className="flex flex-col-reverse gap-3  items-center absolute bottom-3 w-full justify-center ">
          <h1 className="text-xl ">Powered By GeekSpace</h1>
          <img src="./logo/GeekSpaceLogo.svg" alt="GeekSpaceLogo" />
        </div>
      </div>
      <div className="air air2"></div>
      <div className="air air3"></div>
      <div className="air air4"></div>
    </section>
  );
};

export default Footer;
