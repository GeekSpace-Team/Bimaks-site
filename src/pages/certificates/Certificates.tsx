import { FC } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const certificates = [
  "/images/Halal Certificate.be35dd6e (1).png",
  "/images/ISO 9001.8661a8d0.png",
  "/images/ISO 14001.086798fe.png",
  "/images/nfs.320f2461.png",
];

interface CertificatesCardProps {
  certificate: string;
}

const fadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const CertificatesCard: FC<CertificatesCardProps> = ({ certificate }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.1, 1)}
        initial="hidden"
        animate="show"
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-between items-center flex-col">
          <div className="group relative">
            <img
              src={certificate}
              alt="certificate"
              className="w-72 h-72 object-contain shadow-2xl transition-transform duration-300 ease-out group-hover:scale-110"
            />
            {/* <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div> */}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Certificates: FC = () => {
  return (
    <div className="container mx-auto py-8">
      <p className="dark:text-gray-300 text-[40px] text-center mb-10">
        Our Certificates
      </p>
      <div className="flex flex-wrap justify-center">
        {certificates.slice(0, 3).map((cert, index) => (
          <div key={index} className="w-full sm:w-1/3 p-4">
            <CertificatesCard certificate={cert} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <div className="w-full sm:w-1/3 p-4">
          <CertificatesCard certificate={certificates[3]} />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
