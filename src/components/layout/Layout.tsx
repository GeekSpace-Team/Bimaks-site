import { FC, ReactNode } from "react";
import Navbar from "./navbar/Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="flex min-w-full flex-auto min-h-screen">
        <div className="grow">
          <Navbar />
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
