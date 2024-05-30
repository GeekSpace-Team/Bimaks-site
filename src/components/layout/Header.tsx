import { FC } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Header: FC = () => {
  return (
    <div className="flex justify-between items-center dark:text-white pr-[10%] pl-[10%] p-4 bg-transparent">
      <div className="flex items-center space-x-10">
        <div className="flex items-center space-x-2">
          <FaPhone className="text-gray-500 dark:text-white  hover:text-gray-700" />
          <span className="text-gray-700 dark:text-white  hover:text-gray-900">
            +123456789
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-gray-500 dark:text-white  hover:text-gray-700" />
          <span className="text-gray-700 dark:text-white  hover:text-gray-900">
            email@example.com
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <FaFacebook className="text-gray-500 dark:text-white  hover:text-gray-700" />
        <FaTwitter className="text-gray-500 dark:text-white  hover:text-gray-700" />
        <FaInstagram className="text-gray-500 dark:text-white  hover:text-gray-700" />
        <img
          src="/images/ru.svg"
          alt="RU"
          width={20}
          height={20}
          className="hover:opacity-80"
        />
        <img
          src="/images/uk.svg"
          alt="UK"
          width={20}
          height={20}
          className="hover:opacity-80"
        />
        <img
          src="/images/us.svg"
          alt="US"
          width={20}
          height={20}
          className="hover:opacity-80"
        />
      </div>
    </div>
  );
};

export default Header;
