import "./App.css";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <div>
      <h1>🛍 SmartShop Mini – Redux Toolkit</h1>
      <Cart />
      <ProductList />
    </div>
  );
}

export default App;
