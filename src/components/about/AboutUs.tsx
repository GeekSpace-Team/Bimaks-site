import { FC } from "react";
import { aboutText } from "../../data/data";
import MissionAndVision from "./MissionAndVision";

const AboutUs: FC = () => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-bold dark:text-gray-100">About Us</h1>
        {aboutText.map((item) => (
          <p className="leading-9 dark:text-gray-100" key={`about_usText`}>
            {item}
          </p>
        ))}
      </div>
      <MissionAndVision />
      <div className="flex flex-col gap-8 mt-10">
        <h1 className="text-3xl font-bold leading-[50px] dark:text-gray-100">
          Quality, Environment and Occupational Health & Safety Policy
        </h1>
        {aboutText.map((item) => (
          <p className="leading-9 dark:text-gray-100" key={`about_usText`}>
            {item}
          </p>
        ))}
      </div>
    </>
  );
};

export default AboutUs;
