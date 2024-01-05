import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../../layout/Layout";
import {
  About,
  Departments,
  Home,
  Laboratories,
  News,
  Products,
} from "../../../pages";
import { Suspense } from "react";

const RouteList = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={"LOADING..."}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/laboratories" element={<Laboratories />} />
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
};

export default RouteList;
