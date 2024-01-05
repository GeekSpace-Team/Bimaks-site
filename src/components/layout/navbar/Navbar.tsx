import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Language from "../../language/Language";
import Toggle from "../../common/theme/ThemeToggle";
import { navItems } from "../../../data/data";
import { useTranslation } from "react-i18next";

const Navbar: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex items-center justify-between fixed w-full dark:text-white  dark:border-gray-800  px-20 py-5 ${
        isScrolled ? " bg-gray-200 " : "bg-transparent"
      }`}
    >
      <div>
        <h3>Logo</h3>
      </div>
      <div className="flex items-center gap-10">
        {navItems.map((item, i) => (
          <span
            className={`hover:underline underline-offset-4 cursor-pointer ${
              location.pathname === item.path ? "underline" : ""
            }`}
            key={i}
            onClick={() => navigate(item.path)}
          >
            {t(item.title)}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-5">
        <Language />
        <Toggle />
      </div>
    </nav>
  );
};

export default Navbar;
