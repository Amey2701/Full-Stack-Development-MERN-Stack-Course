import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

const ProductList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getProducts();
      setItems(res.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>📦 Product List</h2>

      <div className="products-container">
        {items.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <strong>${item.price}</strong>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
