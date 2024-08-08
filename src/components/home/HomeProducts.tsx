import { useNavigate } from "react-router-dom";
import { FC, useEffect, useState } from "react";
import axios from "axios";

interface ProductItem {
  id: number;
  name_tm: string;
  name_en: string;
  name_ru: string;
  image: string;
}

const HomeProducts: FC = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://95.85.121.153:5634/product-group"
        );
        setProducts(response.data);
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="mt-20 mb-5 w-full">
      <div className="grid gap-5 grid-cols-12">
        {products.map((item) => (
          <div
            key={`product_item_${item.id}`}
            className="col-span-12 lg:col-span-3 md:col-span-4 sm:col-span-6 rounded bg-white overflow-hidden shadow-lg hover:cursor-pointer"
          >
            <img className="w-full" src={item.image} alt="Card" />
            <div className="px-6 py-4 flex flex-col flex-grow">
              <div className="font-bold text-xl mb-2 text-center h-20">
                {item.name_en}
                {/* Change to the appropriate language key if needed */}
              </div>
              <div className="mt-auto">
                <button
                  className="bg-blue-500 px-4 py-2 w-full text-white hover:bg-blue-600 rounded-[6px]"
                  onClick={() => navigate(`/products/${item.id}`)} // Ensure groupId is correct
                >
                  More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
