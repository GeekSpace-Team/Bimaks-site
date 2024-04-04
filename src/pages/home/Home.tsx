import { FC } from "react";
import HomeCarousel from "../../components/home/HomeCarousel";
import DownloadBook from "../../components/home/DownloadBook";

const Home: FC = () => {
  return (
    <div>
      <HomeCarousel />
      <DownloadBook />
    </div>
  );
};

export default Home;
