import { FC, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Language from "../../language/Language";
import Toggle from "../../common/theme/ThemeToggle";
import { navItems } from "../../../data/data";
import { useTranslation } from "react-i18next";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar: FC = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <nav className="fixed w-full bg-transparent  py-4 flex justify-between md:bg-gray-200 md:px-20">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
          Logo
        </h3>

        <button
          className="md:hidden rounded-md focus:outline-none "
          onClick={() => setIsMenuOpen(true)}
        >
          <MenuIcon className="dark:text-gray-500" />
        </button>
      </div>

      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        className="h-screen"
      >
        <List
          sx={{
            width: 200,
          }}
          className="dark:bg-gray-700 dark:text-white   h-screen flex flex-col "
        >
          {navItems.map((item, i) => (
            <ListItem
              sx={{
                pl: 5,
              }}
              key={i}
              button
              component={Link}
              to={item.path}
            >
              <ListItemText primary={t(item.title)} />
            </ListItem>
          ))}
          <hr />
          <hr />
          <div className="flex mt-5 justify-around">
            <Language />
            <Toggle />
          </div>
        </List>
      </Drawer>

      <div className="hidden md:flex items-center justify-between gap-4 md:gap-8">
        {navItems.map((item, i) => (
          <Link key={i} to={item.path} className="hover:underline">
            {t(item.title)}
          </Link>
        ))}
        <Language />
        <Toggle />
      </div>
    </nav>
  );
};

export default Navbar;
