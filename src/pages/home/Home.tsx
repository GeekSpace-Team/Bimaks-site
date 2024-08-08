import { FC, useState, useEffect } from "react";
import MyDocument from "../../components/home/MyDocument";
import { PDFViewer } from "@react-pdf/renderer";
import Certificates from "../certificates/Certificates";
// import Events from "../../components/home/Events";
import HomeHero from "../../components/home/HomeHero";
import HomeProducts from "../../components/home/HomeProducts";
import HomeAbout from "../../components/home/HomeAbout";

const Home: FC = () => {
  const [showHero, setShowHero] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShowHero(false);
    } else {
      setShowHero(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {showHero && <HomeHero />}
      <div className="px-[10%]">
        <HomeProducts />
        <HomeAbout />
        <PDFViewer>
          <MyDocument />
        </PDFViewer>
        <Certificates />
        {/* <Events /> */}
      </div>
    </div>
  );
};

export default Home;
