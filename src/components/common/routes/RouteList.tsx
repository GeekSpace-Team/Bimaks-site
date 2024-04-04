import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../../layout/Layout";
import { About, Home, Products } from "../../../pages";
import { Suspense } from "react";
import FirstComponent from "../../home/first/FirstComponent";
import FirstItem from "../../home/first/FirstItem";

const RouteList = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={"LOADING..."}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/first" element={<FirstComponent />} />
            <Route path="/firstCom" element={<FirstItem />} />
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
};

export default RouteList;
