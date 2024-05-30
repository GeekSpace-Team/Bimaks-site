import { FC } from "react";
import HomeCarousel from "../../components/home/HomeCarousel";
import DownloadBook from "../../components/home/DownloadBook";
import MyDocument from "../../components/home/MyDocument";
import { PDFViewer } from "@react-pdf/renderer";
import Certificates from "../certificates/Certificates";
import Events from "../../components/home/Events";

const Home: FC = () => {
  return (
    <div>
      <div
        className="h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/i (3).webp')" }}
      ></div>
      <div className="pl-[10%] pr-[10%]">
        <HomeCarousel />
        <DownloadBook />
        <PDFViewer>
          <MyDocument />
        </PDFViewer>
        <Certificates />
        <Events />
      </div>
    </div>
  );
};

export default Home;
