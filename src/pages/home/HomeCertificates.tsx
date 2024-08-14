import { FC, useState } from "react";

const HomeCertificates: FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const certificates = [
    {
      default: "/images/Halal Certificate.be35dd6e (1).png",
      hover: "/images/halal.jpg",
    },
    {
      default: "/images/ISO 9001.8661a8d0.png",
      hover: "/images/iso 9.jpg",
    },
    {
      default: "/images/ISO 14001.086798fe.png",
      hover: "/images/iso 14.jpg",
    },
    {
      default: "/images/nfs.320f2461.png",
      hover: "/images/nsf.jpg",
    },
  ];

  return (
    <>
      <p className="dark:text-gray-300 text-[40px] text-center mb-10">
        Our Certificates
      </p>
      <div className="grid grid-cols-1 mb-32 sm:grid-cols-2 md:grid-cols-4 gap-4 p-8">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden rounded-lg"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={cert.hover}
              alt={`Certificate ${index}`}
              className={`object-contain w-56 h-[240px] transition-opacity duration-700 ease-in-out ${
                hoveredIndex === index ? "opacity-0" : "opacity-100"
              }`}
            />
            <img
              src={cert.default}
              alt={`Certificate ${index}`}
              className={`absolute top-0 left-0 object-contain w-56 h-[240px] transition-opacity duration-700 ease-in-out shadow-lg ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeCertificates;
