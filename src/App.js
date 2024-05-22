import "./App.css";
import MenuList from "./Components/MenuList";
import NaviBar from "./Components/NaviBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import CoverImgResultPage from "./Pages/CoverImgResultPage";
import SelectedProductPage from "./Pages/SelectedProductPage";
import CartListPage from "./Pages/CartListPage";
import AddtoCartPage from "./Pages/AddtoCartPage";
import { ProductProvider } from "./Components/ProductContext";
import StepperCheckOut from "./Components/Stepper";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <div className="App">
      <LoginPage/>
      {/* <ProductProvider>
      <NaviBar />
      <MenuList />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/results"
          element={
            <CoverImgResultPage/>
          }
        />
        <Route
          path="/product"
          element={
            <SelectedProductPage/>
          }
        />
        <Route
          path="/cartlist"
          element={
            <CartListPage/>
          }
        />
        <Route 
        path="/addToCart"
        element={<AddtoCartPage/>}
        />
        <Route 
        path="/checkout"
        element={<StepperCheckOut/>}
        />
      </Routes>
      <Footer />
      </ProductProvider> */}
    </div>
  );
}

export default App;
