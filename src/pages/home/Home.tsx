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
      <HomeCarousel />
      <DownloadBook />
      <PDFViewer>
        <MyDocument />
      </PDFViewer>
      <Certificates />
      <Events />
    </div>
  );
};

export default Home;
