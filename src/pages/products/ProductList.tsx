import { FC } from "react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Product 1",
    image: "/images/atiksu-aritma02.jpeg",
  },
  {
    id: 2,
    title: "Product 2",
    image: "/images/Kurumsal.png",
  },
  {
    id: 3,
    title: "Product 3",
    image: "/images/tersosmoz01.jpeg",
  },
  {
    id: 1,
    title: "Product 1",
    image: "/images/atiksu-aritma02.jpeg",
  },
  {
    id: 2,
    title: "Product 2",
    image: "/images/Kurumsal.png",
  },
  {
    id: 3,
    title: "Product 3",
    image: "/images/tersosmoz01.jpeg",
  },
  {
    id: 1,
    title: "Product 1",
    image: "/images/atiksu-aritma02.jpeg",
  },
  {
    id: 2,
    title: "Product 2",
    image: "/images/Kurumsal.png",
  },
  {
    id: 3,
    title: "Product 3",
    image: "/images/tersosmoz01.jpeg",
  },
];

const ProductList: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="px-[10%] my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <div
            onClick={() => navigate(`/product-info/${product.id}`)}
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="p-5">
              <h2 className="text-xl text-center font-bold mb-2">
                {product.title}
              </h2>
              <button className="mt-4 bg-blue-500 w-full text-white py-2 px-4 rounded-2xl hover:bg-blue-600 transition-colors duration-300">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
