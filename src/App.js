import "./App.css";
import MenuList from "./Components/MenuList";
import NaviBar from "./Components/NaviBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import CoverImgResultPage from "./Pages/CoverImgResultPage";
import SelectedProductPage from "./Pages/SelectedProductPage";
import { useState } from "react";
import CartListPage from "./Pages/CartListPage";

function App() {
  const [selectData, setSelectData] = useState("");
  const [cartItems, setCartItems] = useState("");
  const [count, setCount] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [subTotal, setSubTotal] = useState(0);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  return (
    <div className="App">
      <NaviBar count={count} />
      <MenuList />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/results"
          element={
            <CoverImgResultPage
              selectData={selectData}
              setSelectData={setSelectData}
            />
          }
        />
        <Route
          path="/product"
          element={
            <SelectedProductPage
              selectData={selectData}
              addToCart={addToCart}
              setSelectData={setSelectData}
              count={count}
              setCount={setCount}
              quantity={quantity}
              setQuantity={setQuantity}
              subTotal={subTotal}
              setSubTotal={setSubTotal}
            />
          }
        />
        <Route
          path="/cartlist"
          element={
            <CartListPage
              cartItems={cartItems}
              setCount={setCount}
              count={count}
              quantity={quantity}
              subTotal={subTotal}
              setSubTotal={setSubTotal}
              setCartItems={setCartItems}
              setQuantity={setQuantity}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
