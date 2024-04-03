import { FC } from "react";

const Home: FC = () => {
  return (
    <div>
      <div className="w-full h-screen  ">
        <div className="w-52 cursor-pointer shadow-2xl p-7 mt-10 relative bg-white">
          <div className="flex flex-col gap-5 absolute w-52">
            <h1 className="text-xl text-center">HI</h1>
            <h2 className="text-center">This is Bimaks</h2>
            <img className="w-44" src="./logo/biMaksLogo.svg" alt="loo" />
          </div>
          <div className="wave-animation"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
