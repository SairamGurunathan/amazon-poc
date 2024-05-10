import './App.css';
import MenuList from './Components/MenuList';
import NaviBar from './Components/NaviBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Footer from './Components/Footer';
import CoverImgResultPage from './Pages/CoverImgResultPage';
import SelectedProductPage from './Pages/SelectedProductPage';
import { useState } from 'react';
import CartListPage from './Pages/CartListPage';

function App() {
  const [selectData, setSelectData] = useState("");
  const [cartItems, setCartItems] = useState('');
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  return (
    <div className="App">
      <NaviBar/>
      <MenuList/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/results' element={<CoverImgResultPage selectData={selectData} setSelectData={setSelectData}/>} />
        <Route path='/product' element={<SelectedProductPage selectData={selectData} addToCart={addToCart} setSelectData={setSelectData}/>} />
        <Route path='/cartlist' element={<CartListPage cartItems={cartItems}/>} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;