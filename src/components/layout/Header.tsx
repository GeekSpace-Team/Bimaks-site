import { FC } from "react";
import { useTranslation } from "react-i18next";
import { FaPhone, FaEnvelope, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { TiSocialSkypeOutline } from "react-icons/ti";
import { PiTelegramLogoDuotone } from "react-icons/pi";

const Header: FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="flex justify-between items-center dark:text-white pr-[10%] pl-[10%] p-4 bg-transparent">
      <div className="flex items-center space-x-10">
        <div className="flex items-center space-x-2">
          <FaPhone className="text-gray-500 dark:text-white  hover:text-gray-700" />
          <span className="text-gray-700 dark:text-white  hover:text-gray-900">
            +993 64550330
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-gray-500 dark:text-white  hover:text-gray-700" />
          <span className="text-gray-700 dark:text-white  hover:text-gray-900">
            info@bimakstm.com
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <TiSocialSkypeOutline className="text-gray-500 dark:text-white  hover:text-gray-700" />
        <FaWhatsapp className="text-gray-500 dark:text-white  hover:text-gray-700" />
        <PiTelegramLogoDuotone className="text-gray-500 dark:text-white  hover:text-gray-700" />
        <FaInstagram className="text-gray-500 dark:text-white  hover:text-gray-700" />
        <div className="flex items-center pl-8 gap-5">
          <img
            src="/images/ru.svg"
            alt="RU"
            width={20}
            height={20}
            className="hover:opacity-80 cursor-pointer"
            onClick={() => changeLanguage("ru")}
          />
          <img
            src="/images/uk.svg"
            alt="UK"
            width={20}
            height={20}
            className="hover:opacity-80 cursor-pointer"
            onClick={() => changeLanguage("en")}
          />
          <img
            src="/images/us.svg"
            alt="US"
            width={20}
            className="hover:opacity-80 cursor-pointer"
            onClick={() => changeLanguage("tm")}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
