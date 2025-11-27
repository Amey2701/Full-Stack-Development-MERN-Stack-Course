import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, addToCart } from "../redux/slices/productSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div className="grid">
      {items.map((p) => (
        <div key={p.id} className="card">
          <img src={p.image} alt={p.title} />
          <h3>{p.title.slice(0, 25)}...</h3>
          <p>${p.price}</p>
          <button onClick={() => dispatch(addToCart(p))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
