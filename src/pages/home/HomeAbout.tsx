import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const HomeAbout: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleAboutClick = () => {
    navigate("/about");
  };

  return (
    <div className="flex w-full justify-between px-[10%] mt-32 mb-32 py-[5%]">
      <div className="w-[30%] flex items-center ">
        <img
          src="/logo/photo_2024-08-15_17-14-45.jpg"
          alt="Logo"
          className="w-full h-56"
        />
      </div>
      <div className="w-[60%] dark:text-white flex flex-col ">
        <h2 className="text-3xl  font-bold mb-4">{t("home.awtTitle")}</h2>
        <p className="text-base mb-6">{t("home.awtText1")}</p>
        <p className="text-base mb-6">{t("home.awtText2")}</p>
        <button
          onClick={handleAboutClick}
          className="bg-blue-500 text-white px-6 py-2 rounded w-44 hover:bg-blue-600 transition-colors"
        >
          {t("nav.about")}
        </button>
      </div>
    </div>
  );
};

export default HomeAbout;
