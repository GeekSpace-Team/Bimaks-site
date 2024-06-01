import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../../layout/Layout";
import { About, Home, Products } from "../../../pages";
import { Suspense } from "react";
import FirstComponent from "../../home/first/FirstComponent";
import FirstItem from "../../home/first/FirstItem";
import EventsMore from "../../home/EventsMore";
import Contact from "../../../pages/contact/Contact";
import ProductList from "../../../pages/products/ProductList";
import ProductFullInfo from "../../../pages/products/ProductFullInfo";
import TechnicalSolutions from "../../../pages/solutions/TechnicalSolutions";

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
            <Route path="/events/:id" element={<EventsMore />} />
            <Route path="/products/:id" element={<ProductList />} />
            <Route path="/product-info/:id" element={<ProductFullInfo />} />
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
};

export default RouteList;
