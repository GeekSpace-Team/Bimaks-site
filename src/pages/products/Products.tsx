import { FC } from "react";
import ProductGroups from "../../components/product/ProductGroups";

const Products: FC = () => {
  return (
    <>
      <div
        className="h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/i (3).webp')" }}
      ></div>
      <div className="mt-14 mb-24 pl-[10%] pr-[10%] ">
        <ProductGroups />
      </div>
    </>
  );
};

export default Products;
