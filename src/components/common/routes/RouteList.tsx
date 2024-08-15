import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../../layout/Layout";
import { About, Home, Products } from "../../../pages";
import { Suspense } from "react";
import FirstComponent from "../../home/first/FirstComponent";
import FirstItem from "../../home/first/FirstItem";
import Contact from "../../../pages/contact/Contact";
import ProductList from "../../../pages/products/ProductList";
import ProductFullInfo from "../../../pages/products/ProductFullInfo";
import TechnicalSolutions from "../../../pages/solutions/TechnicalSolutions";
import "../../../assets/css/index.css";
import Login from "../../../admin/Login";
import Dashboard from "../../../admin/Dashboard";

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
            <Route
              path="/technical-solutions"
              element={<TechnicalSolutions />}
            />
            <Route path="/firstCom" element={<FirstItem />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products/:groupId" element={<ProductList />} />
            <Route path="/product-info/:id" element={<ProductFullInfo />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
};

export default RouteList;
